import { GetListUserDto } from '../../user/_dto/get-list-user-dto';

export class UpdateRoleDto {
  name: string;
  id: string;
  description: string;
  users: GetListUserDto[] = [];
  permissions: any = [];
}
