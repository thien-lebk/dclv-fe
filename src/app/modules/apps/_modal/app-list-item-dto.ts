export class AppListItemDto {
  id?: string;
  name?: string;
  type?: AppItemTypeEnum;
  client_id: string;
  imgSrc: string;
  constructor(init?: Partial<AppListItemDto>) {
    Object.assign(this, init);
  }
}

export enum AppItemTypeEnum {
  Native = 'Native',
  SinglePageWebApplication = 'Single Page Web Application',
  RegularWebApplication = 'Regular Web Application',
  MachineToMachineApplication = 'Machine To Machine Application'
}
export enum TokenEnpoint {
  Post = 'Post',
  Basic = 'Basic',
  None = 'None'
}
