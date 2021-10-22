/// <reference types="mongoose" />
import { CardService } from './card.service';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    getAllList(): Promise<(import("../shemas/card.schema").Card & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getFullCard(id: any): Promise<(import("../shemas/full.schema").Full & import("mongoose").Document<any, any, any> & {
        _id: any;
    }) | import("@nestjs/common").HttpException>;
}
