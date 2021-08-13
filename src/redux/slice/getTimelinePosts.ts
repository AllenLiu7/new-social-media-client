import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
};

//Async Thunk Action
export const fetchTimelinePosts = createAsyncThunk(
  'timelinePosts/fetchTimelinePosts', //name of your slice plus the name of thunk creator
  async () => {
    try {
      const response = await fetch(
        'http://localhost:8000/api/post/timeline/60ed4aa170b49b2b843f43d6'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error(`${error}`);
    }
  }
);

const { reducer } = createSlice({
  name: 'timelinePosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTimelinePosts.fulfilled, (state, action) => {
      state.posts = action.payload.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      });
      state.loading = false;
      state.hasErrors = false;
    });
    builder.addCase(fetchTimelinePosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTimelinePosts.rejected, (state) => {
      state.loading = false;
      state.hasErrors = true;
    });
  },
});

export default reducer;

//selectors
export const timelinePostsSelector = (state) => state.timelinePosts.posts;
