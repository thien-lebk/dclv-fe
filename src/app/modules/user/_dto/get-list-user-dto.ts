export class GetListUserDto {
  email: string;
  id: string;
  is_active: boolean;
  last_login: Date;
  name: string;
  phone: string;
  username: string;
}
export class GetParamListUser {
  search: string;
  ordering: string;
  page = 1;
  limit = 10;
}
