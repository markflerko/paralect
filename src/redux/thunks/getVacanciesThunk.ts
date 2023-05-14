import { createAsyncThunk } from '@reduxjs/toolkit';
import { IVacanciesAPI } from 'api/vacancies/types';
import { getVacancyByIdThunkResponseType } from 'redux/thunks/getVacancyThunk';

export const getVacanciesThunkCb = (api: IVacanciesAPI) =>
  createAsyncThunk<getVacancyByIdThunkResponseType[], { page: number }>(
    'vacanciesSlice/vacancies',
    async ({ page = 0 }, thunkApi) => {
      return await api.getVacancies({ page });
    }
  );

export default getVacanciesThunkCb;
