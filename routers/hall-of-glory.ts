import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";

export const hallOfGloryRouter = Router();

hallOfGloryRouter

    .get('/', async (req, res) => {

            const warriors =(
                await WarriorRecord.listTop(10)
            ).map((warrior, index)=>{
                return {place: index+1,
                warrior}
            });


            res.render('hall-of-glory/list'
                ,{warriors}
        )
        }
    )
