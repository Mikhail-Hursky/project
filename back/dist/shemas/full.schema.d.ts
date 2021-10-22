import { Document } from 'mongoose';
import ISpell, { IImage } from '../dto/card.dto';
export declare type FullDocument = Full & Document;
export declare class Full {
    id: string;
    spells: ISpell[];
    name: string;
    title: string;
    image: IImage;
    lore: string;
    skins: IImage[];
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
export declare const FullSchema: import("mongoose").Schema<Document<Full, any, any>, import("mongoose").Model<Document<Full, any, any>, any, any, any>, {}>;
