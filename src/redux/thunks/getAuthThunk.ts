import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthAPI, IAuthResDto } from 'api/auth/types';

export const getAuthThunkCb = (api: IAuthAPI) =>
  createAsyncThunk<IAuthResDto>('authSlice/auth', () => {
    return api.login();
  });

export default getAuthThunkCb;
