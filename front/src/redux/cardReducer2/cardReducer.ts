import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCardsApi } from '../../api/api';
import IChampion from '../../dto/IChampion';

export interface ICardReducer {
  cards: IChampion[];
  filter: string;
}

const initialState: ICardReducer = {
  cards: [],
  filter: ''
};

const fetchCardsData = createAsyncThunk('card/fetchCards', async () => {
  const response = await getCardsApi();
  return response.data;
});

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchCardsData.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  }
});

export { fetchCardsData };
export const { addFilter } = cardSlice.actions;
export default cardSlice.reducer;
