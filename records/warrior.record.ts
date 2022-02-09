import {pool} from "../utils/db";


import {ValidationError} from "../utils/errors";
import {v4 as uuid} from "uuid";
import {FieldPacket} from "mysql2";


type WarriorRecordResults = [WarriorRecord[], FieldPacket[]]


export class WarriorRecord {
    public id?: string;
    public readonly name: string;

    public readonly strength: number;
    public readonly defense: number;
    public readonly stamina: number;
    public readonly agility: number;
    public wins?: number;

    constructor(obj: WarriorRecord) {
        const {name, id, strength, defense, stamina, agility, wins} = obj;

        const sum = [stamina, defense, strength, agility].reduce((prev, curr) => prev + curr, 0)

        if (sum !== 10) {
            throw new ValidationError(`Sum of all stats needs to be 10, actual sum is ${sum}`)
        }

        if (name.length < 3 && name.length > 50) {
            throw new ValidationError(`Name must have between 3 and 50 characters, actual length of name is ${name.length}`)
        }

        this.id = id;
        this.name = name;
        this.strength = strength;
        this.defense = defense;
        this.stamina = stamina;
        this.agility = agility;
        this.wins = wins;
    }

    async insert() {
        //uuid
        if (!this.id) {
            this.id = uuid();
        }
        await pool.execute("INSERT INTO `children`(`id`, `name`) VALUES(:id, :name)", {
            id: this.id,
            name: this.name,
        })
    }

    async update(id: string, wins: number): Promise<void> {
        //wins
        await pool.execute("UPDATE `warriors` SET `wins` = :wins,   WHERE `id` = :id", {
            id: this.id,
            wins: this.wins,
        })
    }

    static async getOne(id: string): Promise<WarriorRecord> {
        const [results] = await pool.execute("SELECT * FROM `children` WHERE `id` = :id", {id}) as WarriorRecordResults;
        return results.length === 0 ? null : new WarriorRecord(results[0])
    }

    static async listAll(): Promise<WarriorRecord[]> {
        const [results] = (await pool.execute("SELECT * FROM `warriors` ORDER BY `wins` ASC")) as WarriorRecordResults;
        return results.map(obj => new WarriorRecord(obj));
    }

    static async listTop(topCount: number) {
        const [results] = (await pool.execute("SELECT * FROM `warriors` ORDER BY `wins` ASC limit `wins`< ${topCount}")) as WarriorRecordResults;
        return results.map(obj => new WarriorRecord(obj));
    }


}

