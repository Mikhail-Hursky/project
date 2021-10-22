import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import ISpell from '../dto/card.dto';

export type CardDocument = Card & Document;

@Schema()
export class Card {
  @Prop({ type: String, required: true })
  id: string;

  spells: ISpell[];

  @Prop({ type: String, required: true })
  name: string;

  title: string;

  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };

  passive: {
    name: string;
    description: string;
    image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
  };
}

export const CardSchema = SchemaFactory.createForClass(Card);
