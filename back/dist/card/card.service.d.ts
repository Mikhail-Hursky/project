import { HttpException } from '@nestjs/common';
import { CardDocument } from '../shemas/card.schema';
import { Model } from 'mongoose';
import { FullDocument } from '../shemas/full.schema';
export declare class CardService {
    private readonly cardModel;
    private readonly fullModel;
    constructor(cardModel: Model<CardDocument>, fullModel: Model<FullDocument>);
    getAllCard(): Promise<(import("../shemas/card.schema").Card & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getFullCard(id: string): Promise<(import("../shemas/full.schema").Full & import("mongoose").Document<any, any, any> & {
        _id: any;
    }) | HttpException>;
}
