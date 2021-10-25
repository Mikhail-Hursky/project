import { combineReducers, configureStore } from '@reduxjs/toolkit';
import championReducer, {
  IChampionReducer
} from './championReducer/championReducer';
import cardReducer, { ICardReducer } from './cardReducer2/cardReducer';
import userReducer, { IUserReducer } from './userReducer/userReducer';

export interface IRootReducer {
  card: ICardReducer;
  champion: IChampionReducer;
  user: IUserReducer;
}

const rootReducer = combineReducers<IRootReducer>({
  champion: championReducer,
  user: userReducer,
  card: cardReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
