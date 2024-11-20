import express, { Express, Request, Response } from "express";
import logger from "./src/configs/logger/logger";
import { rHome } from "./src/routes/defaultRoute";
import { rPokemon } from "./src/routes/pokemonRoute";
import { rType } from "./src/routes/typeRoute";
import { rMove } from "./src/routes/moveRoute";
import { rEgg } from "./src/routes/eggRoute";
import { rItem } from "./src/routes/itemRoute";
const app: Express = express();

// Middleware pour parser le corps de la requête au format JSON
app.use(express.json());

app.use(rHome);
app.use(rPokemon);
app.use(rType);
app.use(rMove);
app.use(rEgg)
app.use(rItem)


const port = process.env.PORT || 3000;

app.use("*", (req: Request, res: Response) => {
  res.status(500).send('Bad request');
});

app.listen(port, () => {
    logger.info(`App listening on port  http://localhost:${port}`)
  })
