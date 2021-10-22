import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardsReducer, { ICardReducer } from './cardReducer/cardReducer';
import championReducer, {
  IChampionReducer
} from './championReducer/championReducer';

export interface IRootReducer {
  card: ICardReducer;
  champion: IChampionReducer;
}

const rootReducer = combineReducers<IRootReducer>({
  card: cardsReducer,
  champion: championReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
