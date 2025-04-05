export interface UserDTO {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface CurrentUser {
  id: number;
  name: string;
  email: string;
}
