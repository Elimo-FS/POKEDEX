import { Router } from "express";
import { type, typeFind } from "../controllers/typeControler";

export const rType: Router = Router();

rType.get("/type", type);
rType.get("/type/:information", typeFind);