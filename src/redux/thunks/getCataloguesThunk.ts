import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICataloguesAPI } from 'api/catalogues/types';

export const getCataloguesThunkCb = (api: ICataloguesAPI) =>
  createAsyncThunk<string[]>(
    'cataloguesSlice/catalogues',
    async (data, thunkApi) => {
      return await api.getCatalogues();
    }
  );

export default getCataloguesThunkCb;
