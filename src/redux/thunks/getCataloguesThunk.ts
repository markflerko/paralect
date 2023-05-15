import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICatalogueDto, ICataloguesAPI } from 'api/catalogues/types';

export const getCataloguesThunkCb = (api: ICataloguesAPI) =>
  createAsyncThunk<ICatalogueDto[]>(
    'cataloguesSlice/catalogues',
    async (data, thunkApi) => {
      return await api.getCatalogues();
    },
  );

export default getCataloguesThunkCb;
