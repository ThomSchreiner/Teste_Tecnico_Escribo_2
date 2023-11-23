export interface iLogin {
  email: string;
  password: string;
}

export interface iLoginResponse {
  id: string;
  created_at: Date;
  updated_at: Date;
  last_login: Date | null;
  token: string;
}
