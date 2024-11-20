import { Router } from "express";
import { item, itemFind } from "../controllers/itemControler";

export const rItem: Router = Router();

rItem.get("/item", item);
rItem.get("/item/:information", itemFind);