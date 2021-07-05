export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUser {
  name: string;
  email: string;
  github?: string;
}

export interface IChangeUserPassword {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}
