import {pool} from "../utils/db";

import {ValidationError} from "../utils/errors";
import {v4 as uuid} from "uuid";
import {FieldPacket} from "mysql2";


// export interface WarriorEntity {
//      id?: string;
//      readonly name: string;
//      readonly strength: number;
//      readonly defence: number;
//      readonly stamina: number;
//      readonly agility: number;
//      wins?: number;
// }

type WarriorRecordResults = [WarriorRecord[], FieldPacket[]]


export class WarriorRecord
// implements WarriorEntity
{
    public id?: string;
    public readonly name: string;
    public readonly strength: number;
    public readonly defence: number;
    public readonly stamina: number;
    public readonly agility: number;
    public wins?: number;

    constructor(obj: Omit<WarriorRecord, 'insert' | 'update'>
                // Pick<WarriorRecord, 'id'|'name'| 'strength'| 'stamina'| 'agility' | 'wins'>
    ) {
        const {name, id, strength, defence, stamina, agility, wins} = obj;

        const stats = [ strength, defence, stamina, agility];

        const sum = stats.reduce((prev, curr) => prev + curr, 0)

        for(const stat of stats){
            if(stat<1){
                throw new ValidationError(`Each one statistic must be at least 1 point`)
            }
        }

        if (sum !== 10) {
            throw new ValidationError(`Sum of all stats needs to be 10, actual sum is ${sum}`)
        }

        if (name.length < 3 && name.length > 50) {
            throw new ValidationError(`Name must have between 3 and 50 characters, actual length of name is ${name.length}`)
        }

        this.id = id ?? uuid(); // null'ish operator - if not on the right, return what is on the left
        this.wins = wins ?? 0; // null'ish - default 0
        this.name = name;
        this.strength = strength;
        this.defence = defence;
        this.stamina = stamina;
        this.agility = agility;
    }

    async insert(): Promise<string> {
        // //uuid
        // if (!this.id) {  // moved to constructor with null'ish operator
        //     this.id = uuid();
        // }
        await pool.execute("INSERT INTO `warriors`(`id`, `name`, 'strength`, `defense', 'stamina', 'agility')" +
            " VALUES(:id, :name, :strength, :defense, :stamina, :agility )", {
            id: this.id,
            name: this.name,
            strength: this.strength,
            defence: this.defence,
            stamina: this.stamina,
            agility: this.agility,
        })
        return this.id;
    }

    async update(id: string, wins: number): Promise<void> {
        //wins
        await pool.execute("UPDATE `warriors` SET `wins` = :wins", {
            wins: this.wins,
        })
    }

    static async getOne(id: string): Promise<WarriorRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `warrior` WHERE `id` = :id", {id}) as WarriorRecordResults;
        return results.length === 0 ? null : new WarriorRecord(results[0])
    }

    static async listAll(): Promise<WarriorRecord[]> {
        const [results] = (await pool.execute("SELECT * FROM `warriors` ORDER BY `wins` DESC")) as WarriorRecordResults;
        return results.map(obj => new WarriorRecord(obj));
    }

    static async listTop(topCount: number): Promise<WarriorRecord[]> {
        const [results] = (await pool.execute("SELECT * FROM `warriors` ORDER BY `wins` ASC limit `wins` DESC LIMIT ${topCount}")) as WarriorRecordResults;
        return results.map(obj => new WarriorRecord(obj));
    }


}

