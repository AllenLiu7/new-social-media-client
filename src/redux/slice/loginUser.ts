import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await fetch(` http://localhost:8000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      //console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signUpUser = createAsyncThunk(
  'user/signUpUser', //name of your slice plus the name of thunk creator
  async (
    {
      email,
      password,
      username,
    }: { email: string; password: string; username: string },
    thunkAPI
  ) => {
    try {
      const response = await fetch(` http://localhost:8000/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
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
