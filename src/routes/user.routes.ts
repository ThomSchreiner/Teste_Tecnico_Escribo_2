import { Router } from "express";
import { createUserController, findOneUserController } from "../controller/user.controllers";
import { bodyValidateMiddleware } from "../middlewares/bodyValidate.middleware";
import { userRequestSchema } from "../schemas/user.schemas";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";

export const userRoutes = Router();

userRoutes.post("", bodyValidateMiddleware(userRequestSchema), createUserController);
userRoutes.get("", verifyTokenMiddleware, findOneUserController);
