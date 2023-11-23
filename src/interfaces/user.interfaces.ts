import { iPhoneNumberRequest } from "./phoneNumber.interfaces";

export interface iUserRequest {
  name: string;
  email: string;
  phone_numbers: iPhoneNumberRequest[];
  password: string;
  confirm_password: string;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  last_login: Date | null;
  phone_numbers: iPhoneNumberRequest[];
}
