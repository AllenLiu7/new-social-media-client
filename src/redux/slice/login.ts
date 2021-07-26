import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  currentUser: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser: (state) => {
      state.loading = true;
    },
    loginUserSuccess: (state, { payload }) => {
      state.currentUser = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    loginUserFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export default loginSlice.reducer;

//actions
export const { loginUser, loginUserSuccess, loginUserFailure } =
  loginSlice.actions;

//selector
export const currentUserSelector = (state) => state.user;

//Async Thunk Action
export function fetchUser() {
  return async (dispatch) => {
    dispatch(loginUser());

    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s='
      );
      const data = await response.json();

      dispatch(loginUserSuccess(data.meals));
    } catch (error) {
      dispatch(loginUserFailure());
    }
  };
}
