import { Router } from "express";
import { createUserController } from "../controller/user.controllers";

export const userRoutes = Router();

userRoutes.post("", createUserController);
