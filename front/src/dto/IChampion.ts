import ISpell from "./ISpell";
import Image from "./IImage";
import IPassive from "./IPassive";

export default interface IChampion {
  id: string,
  spells: ISpell[],
  name: string,
  title: string,
  image: Image,
  passive: IPassive
}

