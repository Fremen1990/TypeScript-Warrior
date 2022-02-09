import {Router} from "express";

export const hallOfGloryRouter = Router();

hallOfGloryRouter

    .get('/', (req, res) => {
            res.send("List top 10 best warriors")
        }
    )
