import ISpell from "./ISpell";
import IPassive from "./IPassive";

export interface ISkin {
  id: string,
  num: number,
  name: string,
  chromas: boolean
}

export interface IChampionFull {
  id: string,
  name: string,
  title: string,
  skins: ISkin[],
  lore: string,
  spells: ISpell[],
  passive: IPassive,
}