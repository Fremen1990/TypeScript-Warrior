import {Router} from "express";

export const warriorRouter = Router();

warriorRouter

    .get('/add-form', (req, res) => {
            res.send("Form to add new warrior")
        }
    )

    .post('/', (req, res) => {
        res.send("Adding new warrior")
    })

