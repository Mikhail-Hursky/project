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

const fetchCardsData = createAsyncThunk('cards/fetchCards', async () => {
  const response = await getCardsApi();
  return response.data;
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    }
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCardsData.fulfilled, (state, action) => {
      // Add user to the state array
      state.cards = action.payload;
    });
  }
});

export { fetchCardsData };
export const { addFilter } = cardsSlice.actions;
export default cardsSlice.reducer;
