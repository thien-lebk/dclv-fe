export class Alert {
  id?: string;
  message?: string;
  autoClose?: boolean;
  keepAfterRouteChange?: boolean;
  fade = false;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
