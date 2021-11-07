export class Loading {
  loading = false;
  loadingForm = false;

  constructor(init?: Partial<Loading>) {
    Object.assign(this, init);
  }
}
