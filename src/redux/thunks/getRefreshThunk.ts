import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthAPI, IAuthResDto } from 'api/auth/types';

export const getRefreshThunkCb = (api: IAuthAPI) =>
  createAsyncThunk<IAuthResDto>('authSlice/refresh', () => {
    return api.refresh();
  });

export default getRefreshThunkCb;
