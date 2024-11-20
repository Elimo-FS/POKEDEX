import { Router } from "express";
import { addPocket, delPocket, pokemon, pokemonEggFind, pokemonFind, pokemonMoveFind, pokemonTypeFind } from "../controllers/pokemonControler";

export const rPokemon: Router = Router();

rPokemon.get("/pokemon", pokemon);
rPokemon.get("/pokemon/:information", pokemonFind);
rPokemon.get("/pokemon/:element/type", pokemonTypeFind);
rPokemon.get("/pokemon/:element/move", pokemonMoveFind);
rPokemon.get("/pokemon/:element/egg", pokemonEggFind);
rPokemon.post("/pokemon", addPocket);
rPokemon.delete("/pokemon/:information", delPocket);
// rPokemon.put()
