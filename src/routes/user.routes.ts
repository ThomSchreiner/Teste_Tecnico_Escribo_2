import { Router } from "express";
import { createUserController } from "../controller/user.controllers";
import { bodyValidateMiddleware } from "../middlewares/bodyValidate.middleware";
import { userRequestSchema } from "../schemas/user.schemas";

export const userRoutes = Router();

userRoutes.post("", bodyValidateMiddleware(userRequestSchema), createUserController);
