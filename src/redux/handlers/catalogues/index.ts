import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCataloguesThunk } from 'redux/thunks';

export interface CataloguesState {
  data: string[];
  isLoaded: boolean;
}

export const initialState: CataloguesState = {
  data: [],
  isLoaded: false,
};

const catalogues = createSlice({
  name: 'catalogues',
  initialState: initialState as CataloguesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCataloguesThunk.pending, (state: CataloguesState) => {
      state.isLoaded = false;

      return state;
    });

    builder.addCase(getCataloguesThunk.rejected, (state: CataloguesState) => {
      state.isLoaded = false;

      return state;
    });

    builder.addCase(
      getCataloguesThunk.fulfilled,
      (state: CataloguesState, { payload }: PayloadAction<string[]>) => {
        state.data = payload;
        state.isLoaded = true;

        return state;
      }
    );
  },
});

export default catalogues.reducer;
