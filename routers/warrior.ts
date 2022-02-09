import {Router} from "express";

export const warriorRouter = Router();

warriorRouter

    .get('/add-form', (req, res) => {
            // res.send("Form to add new warrior")
    res.render('warrior/add-form')
    }
    )

    .post('/', (req, res) => {
        res.render('warrior/warrior-added')
    })

