
import { Router } from "express";
import { home } from "../controllers/defaultControler";

export const rHome: Router = Router();

rHome.get("/", home);
