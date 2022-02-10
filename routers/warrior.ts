import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";
import {ValidationError} from "../utils/errors";

export const warriorRouter = Router();

warriorRouter

    .get('/add-form', (req, res) => {
            // res.send("Form to add new warrior")
            res.render('warrior/add-form')
        }
    )

    .post('/', async (req, res) => {

        const {name, strength,defence, stamina, agility} = req.body;

        if (await WarriorRecord.isNameTaken(req.body.name)) {
            throw new ValidationError(`Name ${req.body.name} is already taken, choose different name`)
        }

        const warrior = new WarriorRecord({
            ...req.body,
            strength: Number(strength),
            defence: Number(defence),
            stamina: Number(stamina),
            agility: Number(agility)
        })
        // console.log(warrior)
        await warrior.insert();
        res.render('warrior/warrior-added', {
            name: warrior.name,
            id: warrior.id
        })
    })

