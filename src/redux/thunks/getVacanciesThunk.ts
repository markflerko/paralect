import { createAsyncThunk } from '@reduxjs/toolkit';
import { IVacanciesAPI, IVacanciesDto } from 'api/vacancies/types';
import { getVacancyByIdThunkResponseType } from 'redux/thunks/getVacancyThunk';

export const getVacanciesThunkCb = (api: IVacanciesAPI) =>
  createAsyncThunk<getVacancyByIdThunkResponseType[], IVacanciesDto>(
    'vacanciesSlice/vacancies',
    async (dto, thunkApi) => {
      return await api.getVacancies(dto);
    },
  );

export default getVacanciesThunkCb;
