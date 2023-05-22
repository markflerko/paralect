import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  keyword: string;
}

const initialState: FiltersState = {
  keyword: '',
};

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (
      state: FiltersState,
      { payload }: PayloadAction<FiltersState>,
    ) => {
      state = { ...state, ...payload };
      return state;
    },
  },
});

export const { setFilters } = filters.actions;
export default filters.reducer;
