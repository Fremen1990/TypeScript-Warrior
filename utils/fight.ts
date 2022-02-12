import {WarriorRecord} from "../records/warrior.record";

// export enum LogEntryType {
//     Attack,
//     Defence,
//     DefenceBroken
// }

//
export interface LogEntry {
    logMessage: string;
    logIcon: string;
}


export const fight = (warrior1: WarriorRecord, warrior2: WarriorRecord): {
    log: LogEntry[];
    // log:string[];
    winner: WarriorRecord;
} => {
    const log:
        // string[]
        LogEntry[] = [];


    const warrior1Obj = {
        hp: warrior1.stamina * 10,
        dp: warrior1.defence,
        warrior: warrior1,
    }

    const warrior2Obj = {
        hp: warrior1.stamina * 10,
        dp: warrior1.defence,
        warrior: warrior2
    }

    let attacker = warrior1Obj;
    let defender = warrior2Obj;

    do {
        const attackStrength = attacker.warrior.strength;

        let   logMessage = (`${attacker.warrior.name} is attacking ${defender.warrior.name} with strength ${attackStrength}`)  ;

         log.push(logMessage as any); // TODO ANY !!


        if (defender.dp + defender.warrior.agility > attackStrength) {

            let logMessage = (`${defender.warrior.name} is defending himself from ${attacker.warrior.name}'s attack`)

            log.push(logMessage as any) // TODO ANY!!


            defender.dp -= attackStrength;

            if (defender.dp < 0) {

                let logMessage = (`${attacker.warrior.name} fighting through ${defender.warrior.name} defence and causing damage ${-defender.dp} hp to ${defender.warrior.name}`)

                log.push(logMessage as any ) //  TODO ANY !!

                defender.hp -= attackStrength - defender.dp; //  todo tu zmieniłem
            }
        } else {
            let logMessage = (`${attacker.warrior.name}  is damaging   ${defender.warrior.name}  with ${attackStrength} hp`)

            log.push(logMessage as any); // TODO ANY!!

            defender.hp -= attackStrength;
        }

        [defender, attacker] = [attacker, defender];

    } while (defender.hp > 0);

    const winner = defender.warrior;

    let logMessage = (`${winner.name} won!`)

    log.push(logMessage as any) // TODO ANY!!
    return {log, winner}
}
