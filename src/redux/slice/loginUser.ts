import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { _loginUser, _registerUser } from '../../service/api/auth';

export const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
  currentUser: null,
};

//Async Thunk Action
export const loginUser = createAsyncThunk(
  'user/loginUser', //name of your slice plus the name of thunk creator
  async (formValue, thunkAPI) => {
    try {
      const response = await _loginUser(formValue);
      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      //console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signUpUser = createAsyncThunk(
  'user/signUpUser', //name of your slice plus the name of thunk creator
  async (formValue, thunkAPI) => {
    try {
      const response = await _registerUser(formValue);

      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      //console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState(state) {
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      //console.log(payload);
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(signUpUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
  },
});

export default reducer;

//action
export const { clearState } = actions;

//selector
export const currentUserSelector = (state) => state.currentUser;
