declare interface ServerResponse<T = any> {
  data?: T;
  error?: string;
}
