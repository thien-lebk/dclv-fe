import { AuthorizationGrantType } from '../../app-create/_modal/app-create-dto';

export class UpdateAppDetailDto {
  algorithm?: string;
  authorization_grant_type?: AuthorizationGrantType;
  client_id: string;
  client_secret: string;
  client_type: string;
  name: string;
  redirect_uris: string;
  skip_authorization: boolean;
  type?: string;
  user?: string;

  constructor(init?: Partial<UpdateAppDetailDto>) {
    Object.assign(this, init);
  }
}
