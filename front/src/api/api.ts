import axios, { AxiosError } from 'axios';
import { message } from 'antd';
import IChampion from '../dto/IChampion';
import { IChampionFull } from '../dto/IChampuionFull';
import { AUTH_TOKEN, URL } from '../Constants';
import IUserAuth from '../dto/IUserAuth';
import IUserReg from '../dto/IUserReg';
import IMessage from '../dto/IMessage';
import IToken from '../dto/IToken';
import store from '../redux/store';
import { addToken, addUser } from '../redux/userReducer/userReducer';
import IUser from '../dto/IUser';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`
};

const instance = axios.create({
  baseURL: URL,
  headers
});

export const getCardsApi = async () => {
  return await instance.get<IChampion[]>('card');
};

export const getFullCardApi = async (id: string) => {
  return await instance.get<IChampionFull>(`card/full?id=${id}`);
};

export const getUserApi = async () => {
  return await instance
    .get<IUser>('user')
    .then(res => {
      console.log(res);
      store.dispatch(addUser(res.data));
    })
    .catch((res: AxiosError<IMessage>) => message.error(res.message));
};

export const registrationApi = async (dto: IUserReg) => {
  return await instance
    .post<IMessage>('auth/registration', dto)
    .then(res => {
      message.success(res.data.message);
    })
    .catch((res: AxiosError<IMessage>) => message.error(res.message));
};

export const loginApi = async (dto: IUserAuth) => {
  return await instance
    .post<IToken>('auth/login', dto)
    .then(res => {
      localStorage.setItem(AUTH_TOKEN, res.data.token);
      store.dispatch(addToken(res.data.token));
    })
    .then(() => getUserApi())
    .catch((res: AxiosError<IMessage>) => {
      message.error(res.message);
    });
};
