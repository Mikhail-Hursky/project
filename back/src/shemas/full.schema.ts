import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import ISpell, {IImage} from "../dto/card.dto";

export type FullDocument = Full & Document;

@Schema()
export class Full {
  @Prop({type: String, required: true})
  id: string

  spells: ISpell[]

  @Prop({type: String, required: true})
  name: string

  title: string

  image: IImage

  lore: string

  skins: IImage[]

  passive: {
    name: string
    description: string
    image: {
      full: string
      sprite: string
      group: string,
      x: number,
      y: number,
      w: number,
      h: number
    }
  }

}

export const FullSchema = SchemaFactory.createForClass(Full);