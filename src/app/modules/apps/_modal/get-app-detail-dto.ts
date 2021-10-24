import {AuthorizationGrantType} from '../../app-create/_modal/app-create-dto'

export class GetAppDetailDto {
    id?: number;
    algorithm?: string;
    authorization_grant_type?: AuthorizationGrantType;
    client_id: string;
    client_secret: string;
    client_type: string;
    created: string;
    updated: string;
    name: string;
    redirect_uris: string;
    skip_authorization: boolean;
    type?: string;
    user?: string;
    domain?: string;

    constructor(init?: Partial<GetAppDetailDto>) {
      Object.assign(this, init);
    }
  }
  