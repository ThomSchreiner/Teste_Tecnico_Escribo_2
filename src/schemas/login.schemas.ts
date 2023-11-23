import * as yup from "yup";
import { ObjectSchema } from "yup";
import { iLogin, iLoginResponse } from "../interfaces/login.interfaces";

export const loginSchema: ObjectSchema<iLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const loginResponseSchema: ObjectSchema<iLoginResponse> = yup.object().shape({
  token: yup.string().required(),
  last_login: yup.date().required().nullable(),
  updated_at: yup.date().required(),
  created_at: yup.date().required(),
  id: yup.string().required(),
});
