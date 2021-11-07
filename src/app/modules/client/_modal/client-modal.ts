import { Domain } from './domain-modal';

export class ClientDto {
  name?: string;
  schema_name?: string;
  owner: string;
  constructor(init?: Partial<Client>) {
    Object.assign(this, init);
  }
}

export class Client {
  id?: number;
  name?: string;
  schema_name?: string;
  owner: string;
  created_on: string;
  domains: Domain[];
  constructor(init?: Partial<ClientDto>) {
    Object.assign(this, init);
  }
}
