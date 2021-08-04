import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  user: {},
};

//Async Thunk Action
export const fetchUser = createAsyncThunk(
  'user/fetchUser', //name of your slice plus the name of thunk creator
  async (userId: string) => {
    try {
      const response = await fetch(
        ` http://localhost:8000/api/user?userId=${userId}`
      );
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
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
  },
});

export default reducer;

//selector
export const userSelector = (state) => state.user.user;