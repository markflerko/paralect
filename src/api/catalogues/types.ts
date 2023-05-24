export interface ICatalogueDto {
  title: string;
  title_trimmed: string;
  key: number;
}

export interface ICataloguesAPI {
  getCatalogues(): Promise<ICatalogueDto[]>;
}
