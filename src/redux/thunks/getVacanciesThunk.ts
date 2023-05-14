import { createAsyncThunk } from '@reduxjs/toolkit';
import { IVacanciesAPI } from 'api/vacancies/types';
import { getVacancyByIdThunkResponseType } from 'redux/thunks/getVacancyThunk';

export const getVacanciesThunkCb = (api: IVacanciesAPI) =>
  createAsyncThunk<getVacancyByIdThunkResponseType[]>(
    'vacanciesSlice/vacancies',
    async (_, thunkApi) => {
      return await api.getVacancies();
    }
  );

export default getVacanciesThunkCb;