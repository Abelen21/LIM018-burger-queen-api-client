export interface User {
  id: string;
  email: string;
  password: string;
  roles: {
    admin: boolean;
    waiter: boolean;
    chef: boolean
  }
}



export interface CreateUserDTO extends Omit<User, 'id'> {}
