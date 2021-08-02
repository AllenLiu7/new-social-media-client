import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
};

//Async Thunk Action
export const fetchUserPosts = createAsyncThunk(
  'userPosts/fetchUserPosts', //name of your slice plus the name of thunk creator
  async () => {
    try {
      const response = await fetch(
        'http://localhost:8000/api/post/profile/60ed4aa170b49b2b843f43d6'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
);

const { reducer } = createSlice({
  name: 'userPosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(fetchUserPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserPosts.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
  },
});

export default reducer;

//selectors
export const userPostsSelector = (state) => state.userPosts.posts;
