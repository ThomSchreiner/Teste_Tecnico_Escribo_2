import * as yup from "yup";
import { ObjectSchema } from "yup";
import { iPhoneNumberRequest } from "../interfaces/phoneNumber.interfaces";

export const phoneNumberRequestSchema: ObjectSchema<iPhoneNumberRequest> = yup.object().shape({
  ddd: yup.string().length(2).required(),
  number: yup.string().length(9).required(),
});
