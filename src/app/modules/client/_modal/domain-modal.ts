export class Domain {
  domain?: string;
  id?: string;
  is_primary?: boolean;
  tenant_id: number;
  constructor(init?: Partial<Domain>) {
    Object.assign(this, init);
  }
}
