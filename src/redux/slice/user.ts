import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUserFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export default userSlice.reducer;

//actions
export const { getUser, getUserSuccess, getUserFailure } = userSlice.actions;

//selector
export const userSelector = (state) => state.user;

//Async Thunk Action
export function fetchUser() {
  return async (dispatch) => {
    dispatch(getUser());

    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s='
      );
      const data = await response.json();

      dispatch(getUserSuccess(data.meals));
    } catch (error) {
      dispatch(getUserFailure());
    }
  };
}
