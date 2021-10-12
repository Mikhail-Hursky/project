import Spell from "./ISpell";
import Image from "./IImage";

export default interface IChampion {
  id: string,
  spells: Spell[],
  blurb: string,
  key: string,
  name: string,
  title: string,
  image: Image,
  passive: {
    name: string,
    description: string,
    image: Image
  }
}

