import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  followings: [],
};

//Async Thunk Action
export const fetchFollowings = createAsyncThunk(
  'user/fetchFollowings', //name of your slice plus the name of thunk creator
  async () => {
    try {
      const response = await fetch(
        'http://localhost:8000/api/user/60ed4aa170b49b2b843f43d6/followings'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
);

const { reducer } = createSlice({
  name: 'followings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFollowings.fulfilled, (state, action) => {
      state.followings = action.payload;
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(fetchFollowings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFollowings.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
  },
});

export default reducer;
