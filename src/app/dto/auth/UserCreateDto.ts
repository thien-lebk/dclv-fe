
export class UserCreateDto {
  email?: string;
  password?: string;
  name?: string;
  username?: string;
  phone?: string;
  is_active = true;
}

