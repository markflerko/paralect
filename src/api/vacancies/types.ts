import { getVacancyByIdThunkResponseType } from "redux/thunks/getVacancyThunk";

export interface IVacanciesAPI {
  getVacancies(): Promise<getVacancyByIdThunkResponseType[]>;
  getSavedVacancies(ids: number[]): Promise<getVacancyByIdThunkResponseType[]>;
  getVacancyById(id: string): Promise<getVacancyByIdThunkResponseType>;
}