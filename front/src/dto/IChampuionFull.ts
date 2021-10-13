import Image from "./IImage";
import Spell from "./ISpell";

export interface ISkin {
  id: string,
  num: number,
  name: string,
  chromas: boolean
}

export interface IInfo {
  attack: number,
  defense: number,
  magic: number,
  difficulty: number
}

export interface IStats {
  hp: number,
  hpperlevel: number,
  mp: number,
  mpperlevel: number,
  movespeed: number,
  armor: number,
  armorperlevel: number,
  spellblock: number,
  spellblockperlevel: number,
  attackrange: number,
  hpregen: number,
  hpregenperlevel: number,
  mpregen: number,
  mpregenperlevel: number,
  crit: number,
  critperlevel: number,
  attackdamage: number,
  attackdamageperlevel: number,
  attackspeedperlevel: number,
  attackspeed: number
}

export interface IChampionFull {
  id: string,
  key: string,
  name: string,
  title: string,
  image: Image,
  skins: ISkin[],
  lore: string,
  blurb: string,
  allytips: string[],
  enemytips: string[],
  tags: string[],
  partype: string,
  info: IInfo,
  stats: IStats,
  spells: Spell[],
  passive: {
    name: string,
    description: string,
    image: Image
  },
  recommended: any[]
}