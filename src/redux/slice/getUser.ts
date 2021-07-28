import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  loading: false,
  hasErrors: false,
  currentUser: null,
};

const getUserSlice = createSlice({
  name: 'getUser',
  initialState,
  reducers: {
    getUser: (state) => {
      state.loading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.currentUser = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUserFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export default getUserSlice.reducer;

//actions
export const { getUser, getUserSuccess, getUserFailure } = getUserSlice.actions;

//selector
export const currentUserSelector = (state) => state.getUser;

//Async Thunk Action
export function fetchUser() {
  return async (dispatch) => {
    dispatch(getUser());

    try {
      const response = await axios(
        'http://localhost:8000/api/user/60ed4aa170b49b2b843f43d6'
      );

      dispatch(getUserSuccess(response.data));
    } catch (error) {
      dispatch(getUserFailure());
    }
  };
}
