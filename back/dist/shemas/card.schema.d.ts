import { Document } from 'mongoose';
import ISpell from '../dto/card.dto';
export declare type CardDocument = Card & Document;
export declare class Card {
    id: string;
    spells: ISpell[];
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
export declare const CardSchema: import("mongoose").Schema<Document<Card, any, any>, import("mongoose").Model<Document<Card, any, any>, any, any, any>, {}>;
