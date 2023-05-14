import { getVacancyByIdThunkResponseType } from 'redux/thunks/getVacancyThunk';

export interface IVacanciesAPI {
  getVacancies({
    page,
  }: {
    page: number;
  }): Promise<getVacancyByIdThunkResponseType[]>;
  getSavedVacancies(ids: number[]): Promise<getVacancyByIdThunkResponseType[]>;
  getVacancyById(id: string): Promise<getVacancyByIdThunkResponseType>;
}
