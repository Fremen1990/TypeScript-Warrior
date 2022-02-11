import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";

export const hallOfGloryRouter = Router();

hallOfGloryRouter

    .get('/', async (req, res) => {

            const warriors = await WarriorRecord.listTop(10);


            res.render('hall-of-glory/list'
                ,{warriors}
        )
        }
    )
