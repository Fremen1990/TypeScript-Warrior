import * as express from "express";
import 'express-async-errors';
import * as methodOverride from "method-override";
import {static as eStatic, urlencoded} from "express";
import {engine} from "express-handlebars";
import {homeRouter} from "./routers/home";
import {warriorRouter} from "./routers/warrior";
import {arenaRouter} from "./routers/arena";
import {hallOfGloryRouter} from "./routers/hall-of-glory";
import {WarriorRecord} from "./records/warrior.record";
import './utils/db'
import {handleError} from "./utils/errors";

const app = express();

app.use(methodOverride('_method'));
app.use(urlencoded({
    extended: true,
}));
app.use(eStatic('public'));

app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: ???
}));

app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/views/img/'));


app.use('/', homeRouter);
app.use('/warrior', warriorRouter);
app.use('/arena', arenaRouter);
app.use('/hall-of-glory', hallOfGloryRouter);

app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log(`Listening on http://localhost:3000`)
});


// const w =  new WarriorRecord({
//     name: 'Goku' ,
//     strength: 7,
//     defence: 1,
//     stamina: 1,
//     agility: 1,
// })
//
// console.log(w)
