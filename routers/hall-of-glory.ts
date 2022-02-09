import {Router} from "express";

export const hallOfGloryRouter = Router();

hallOfGloryRouter

    .get('/', (req, res) => {
            res.render('hall-of-glory/list')
        }
    )
