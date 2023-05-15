import { createAsyncThunk } from '@reduxjs/toolkit';
import { IVacanciesAPI } from 'api/vacancies/types';

export interface getVacancyByIdThunkResponseType {
  id: number;
  currency: string;
  payment_from: number;
  payment_to: number;
  profession: string;
  town: {
    title: string;
  };
  type_of_work: {
    title: string;
  };
  vacancyRichText: string;
}

export const getVacancyByIdThunkCb = (api: IVacanciesAPI) =>
  createAsyncThunk<getVacancyByIdThunkResponseType, string>(
    'vacanciesSlice/vacancy',
    async (id: string, thunkApi) => {
      return await api.getVacancyById(id);
    },
  );

export default getVacancyByIdThunkCb;
