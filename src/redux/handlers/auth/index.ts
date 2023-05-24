import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getAuthThunk, getRefreshThunk } from 'redux/thunks';

export interface AuthType {
  isAuth: boolean;
  isLoaded: boolean;
  message: string;
  isError: boolean;
}

const initialState: AuthType = {
  isAuth: false,
  isLoaded: false,
  message: '',
  isError: false,
};

const pendingState = (state: AuthType) => {
  state.isLoaded = false;
  state.isAuth = false;
  state.isError = false;
  state.message = '';
};

const rejectedState = (
  state: AuthType,
  action: PayloadAction<{ message: string }>,
) => {
  state.isLoaded = true;
  state.isError = true;
  state.message = action?.payload?.message;
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRefreshThunk.pending, (state) => {
      pendingState(state);
    });

    builder.addCase(getRefreshThunk.rejected, (state, action: any) => {
      rejectedState(state, action);
    });

    builder.addCase(getRefreshThunk.fulfilled, (state) => {
      state.isLoaded = true;
      state.isAuth = true;
    });

    builder.addCase(getAuthThunk.pending, (state) => {
      pendingState(state);
    });

    builder.addCase(getAuthThunk.rejected, (state, action: any) => {
      rejectedState(state, action);
    });

    builder.addCase(getAuthThunk.fulfilled, (state) => {
      state.isLoaded = true;
      state.isAuth = true;
    });
  },
});

export default auth.reducer;
