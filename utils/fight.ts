import {WarriorRecord} from "../records/warrior.record";

export const fight = (warrior1: WarriorRecord, warrior2: WarriorRecord): {
    log: string[];
    winner: WarriorRecord;
} => {
    const log: string[] = [];

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

        log.push(`${attacker.warrior.name} is attacking ${defender.warrior.name} with strength ${attackStrength}`)

        if (defender.dp + defender.warrior.agility > attackStrength) {

            log.push(`${defender.warrior.name} is defending himself from ${attacker.warrior.name}'s attack`)
            defender.dp -= attackStrength;

            if (defender.dp < 0) {

                log.push(`${attacker.warrior.name} fighting through ${defender.warrior.name} defence and causing damage ${-defender.dp} hp to ${defender.warrior.name}`)

                defender.hp -= attackStrength - defender.dp; //  todo tu zmieniłem
            }
        }else{
            log.push(`${attacker.warrior.name}  is damaging   ${defender.warrior.name}  with ${attackStrength} hp`)

            defender.hp -= attackStrength;
        }

        [defender, attacker] = [attacker, defender];

    } while (defender.hp > 0);

    const winner = defender.warrior;
log.push(`${winner.name} won!`)
    return {log, winner}
}
