export interface ICatalogueDto {
  title: string;
  key: number;
}

export interface ICataloguesAPI {
  getCatalogues(): Promise<ICatalogueDto[]>;
}
