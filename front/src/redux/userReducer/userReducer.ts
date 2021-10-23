import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_TOKEN } from '../../Constants';

export interface IUserReducer {
  token: string | null;
  email: string;
  name: string;
}

const initialState: IUserReducer = {
  token: localStorage.getItem(AUTH_TOKEN),
  email: '',
  name: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    addUser(state, action: PayloadAction<{ email: string; name: string }>) {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    logout(state) {
      state.token = null;
      state.email = '';
      state.name = '';
      localStorage.setItem(AUTH_TOKEN, '');
    }
  }
});

export const { addToken, addUser, logout } = userSlice.actions;
export default userSlice.reducer;
