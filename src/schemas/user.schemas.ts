import * as yup from "yup";
import { ObjectSchema } from "yup";
import { iUser, iUserRequest } from "../interfaces/user.interfaces";
import { phoneNumberRequestSchema } from "./phoneNumber.schemas";

export const userRequestSchema: ObjectSchema<iUserRequest> = yup.object().shape({
  name: yup.string().max(50).required(),
  email: yup.string().email().max(100).required(),
  password: yup.string().required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords are not the same. Try again!")
    .required(),
  phone_numbers: yup.array().of(phoneNumberRequestSchema).required(),
});

export const userResponseSchema: ObjectSchema<iUser> = yup.object().shape({
  token: yup.string().required(),
  last_login: yup.date().required().nullable(),
  updated_at: yup.date().required(),
  created_at: yup.date().required(),
  id: yup.string().required(),
});
