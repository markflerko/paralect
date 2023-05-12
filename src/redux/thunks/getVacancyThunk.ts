import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const getVacancyByIdThunk = createAsyncThunk<
  getVacancyByIdThunkResponseType,
  string
>('vacanciesSlice/vacancy', async (id: string, thunkApi) => {
  try {
    return axios
      .get(
        `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/${id}`,
        {
          headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id':
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
          },
        }
      )
      .then((res) => res.data);
  } catch (error) {
    return {
      id: Number(id),
      currency: '',
      payment_from: 0,
      payment_to: 0,
      profession: '',
      town: {
        title: '',
      },
      type_of_work: {
        title: '',
      },
      vacancyRichText: '',
    };
  }
});

export default getVacancyByIdThunk;
