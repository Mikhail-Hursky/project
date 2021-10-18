import Image from "./IImage";

export default interface ISpell {
  id: string,
  name: string,
  description: string,
  tooltip: string,
  leveltip: {
    label: string[],
    effect: string[]
  },
  maxrank: number,
  cooldown: number[],
  cooldownBurn: string,
  cost: number[],
  costBurn: string,
  datavalues: {},
  effect: any,
  effectBurn: (string | null)[],
  vars: any[],
  costType: string,
  maxammo: string,
  range: number[],
  rangeBurn: string,
  image: Image,
  resource: string
}