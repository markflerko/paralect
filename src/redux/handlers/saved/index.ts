import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVacancy } from 'interfaces/Vacancy.interface';
import { getSavedVacanciesThunk } from 'redux/thunks';
import { getVacancyByIdThunkResponseType } from 'redux/thunks/getVacancyThunk';
import { vacancyFieldMapper } from 'utils/vacancyFieldMapper';

export interface SavedState {
  data: IVacancy[];
  isLoaded: boolean;
}

export const initialState: SavedState = {
  data: [
    { id: 'vacancy-5' },
    { id: 'vacancy-6' },
    { id: 'vacancy-7' },
    { id: 'vacancy-8' },
  ] as unknown as IVacancy[],
  isLoaded: false,
};

const saved = createSlice({
  name: 'saved',
  initialState: initialState as SavedState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSavedVacanciesThunk.pending, (state: SavedState) => {
      state.isLoaded = false;

      return state;
    });

    builder.addCase(getSavedVacanciesThunk.rejected, (state: SavedState) => {
      state.isLoaded = false;

      return state;
    });

    builder.addCase(
      getSavedVacanciesThunk.fulfilled,
      (
        state: SavedState,
        { payload }: PayloadAction<getVacancyByIdThunkResponseType[]>,
      ) => {
        state.data = payload.map(vacancyFieldMapper);
        state.isLoaded = true;

        return state;
      },
    );
  },
});

export default saved.reducer;
