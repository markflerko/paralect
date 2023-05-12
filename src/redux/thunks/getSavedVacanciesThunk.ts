import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getVacancyByIdThunkResponseType } from 'redux/thunks/getVacancyThunk';

export const getSavedVacanciesThunk = createAsyncThunk<
  getVacancyByIdThunkResponseType[],
  number[]
>('savedSlice/saved', async (saved: number[], thunkApi) => {
  try {
    const getVacancy = (id: number) =>
      axios
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
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.error(error);
        });

    const promises = saved.map((id) => getVacancy(id));

    return await Promise.all(promises);
  } catch (error) {
    return [];
  }
});

export default getSavedVacanciesThunk;
