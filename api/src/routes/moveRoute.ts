import { Router } from "express";
import { move, moveFind } from "../controllers/moveControler";

export const rMove: Router = Router();

rMove.get("/move", move);
rMove.get("/move/:information", moveFind);