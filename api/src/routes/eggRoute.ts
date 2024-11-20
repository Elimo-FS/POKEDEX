import { Router } from "express";
import { egg, eggFind } from "../controllers/eggControler";

export const rEgg: Router = Router();

rEgg.get("/egg", egg);
rEgg.get("/egg/:information", eggFind);