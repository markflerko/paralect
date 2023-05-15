import { getVacancyByIdThunkResponseType } from 'redux/thunks/getVacancyThunk';

export interface IVacanciesDto {
  page?: number;
  key?: number | null;
  paymentFrom?: number | null;
  paymentTo?: number | null;
}

export interface IVacanciesAPI {
  getVacancies(dto: IVacanciesDto): Promise<getVacancyByIdThunkResponseType[]>;
  getSavedVacancies(ids: number[]): Promise<getVacancyByIdThunkResponseType[]>;
  getVacancyById(id: string): Promise<getVacancyByIdThunkResponseType>;
}
