import axios from "axios";
import IChampion from "../dto/IChampion";
import {IChampionFull} from "../dto/IChampuionFull";

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
})


export const getCardsApi = async () => {
  return await instance.get<IChampion[]>('card')
}

export const getFullCardApi = async (id: string) => {
  return await instance.get<IChampionFull>(`card/full?id=${id}`)
}