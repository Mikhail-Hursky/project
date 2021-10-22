import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFullCardApi } from '../../api/api';
import { IChampionFull } from '../../dto/IChampuionFull';

interface IChampionReducer {
  id: string;
  champion: IChampionFull | null;
}

const initialState: IChampionReducer = {
  id: '',
  champion: null,
};

const fetchChampion = createAsyncThunk(
  'champion/fetchChampion',
  async (id: string) => {
    const response = await getFullCardApi(id);
    if (response.status === 404) return null;
    return response.data;
  }
);

const championSlice = createSlice({
  name: 'champion',
  initialState,
  reducers: {
    addId(state, action: PayloadAction<string>) {
      state.champion = null;
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChampion.fulfilled, (state, action) => {
      state.champion = action.payload;
    });
  },
});

export { fetchChampion };
export type { IChampionReducer };
export const { addId } = championSlice.actions;
export default championSlice.reducer;
