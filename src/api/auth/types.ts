export interface IAuthResDto {
  access_token: string;
  refresh_token: string;
  ttl: number;
}

export interface IAuthAPI {
  login(): Promise<IAuthResDto>;
}
