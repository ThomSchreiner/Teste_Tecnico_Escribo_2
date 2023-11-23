import { iPhoneNumberRequest } from "./phoneNumber.interfaces";

export interface iUserRequest {
  name: string;
  email: string;
  phone_numbers: iPhoneNumberRequest[];
  password: string;
  confirm_password: string;
}
