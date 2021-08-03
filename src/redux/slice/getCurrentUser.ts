import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  currentUser: {},
};

//Async Thunk Action
export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser', //name of your slice plus the name of thunk creator
  async (userId: string) => {
    try {
      const response = await fetch(` http://localhost:8000/api/user/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
);

const { reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCurrentUser.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
  },
});

export default reducer;

//selector
export const currentUserSelector = (state) => state.currentUser.currentUser;
