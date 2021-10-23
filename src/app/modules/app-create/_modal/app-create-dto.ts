export class AppcreateDto {
  id?: number;
  client_id?: string;
  redirect_uris?: string;
  client_type?: ClientType;
  authorization_grant_type?: AuthorizationGrantType;
  client_secret?: string;
  name: string;
  skip_authorization?: true;
  algorithm?: Algorithm;
  type?: string;
  user?: string;
  imgSrc =
    'https://genk.mediacdn.vn/thumb_w/660/139269124445442048/2021/9/13/photo-1-1631488187952925878697.jpg';
  public get _authorization_grant_type() {
    if (
      this.authorization_grant_type === AuthorizationGrantType.AuthorizationCode
    ) {
      return 'Authorization Code';
    } else if (
      this.authorization_grant_type === AuthorizationGrantType.Implicit
    ) {
      return 'Implicit';
    } else if (
      this.authorization_grant_type === AuthorizationGrantType.Password
    ) {
      return 'Password';
    } else if (
      this.authorization_grant_type === AuthorizationGrantType.ClientCredentials
    ) {
      return 'Client Credentials';
    } else if (
      this.authorization_grant_type === AuthorizationGrantType.OpenidHybrid
    ) {
      return 'Open-id Hybrid';
    }
  }
}
export enum ClientType {
  Confidential = 'confidential',
  Public = 'public'
}
export enum AuthorizationGrantType {
  AuthorizationCode = 'authorization-code',
  Implicit = 'implicit',
  Password = 'password',
  ClientCredentials = 'client-credentials',
  OpenidHybrid = 'openid-hybrid'
}
export enum Algorithm {
  None = '',
  RS256 = 'RS256',
  HS256 = 'HS256'
}
