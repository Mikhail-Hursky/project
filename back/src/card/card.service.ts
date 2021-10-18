import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {CardDocument} from "../shemas/card.schema";
import {Model} from "mongoose";
import {FullDocument} from "../shemas/full.schema";

@Injectable()
export class CardService {
  constructor(
    @InjectModel('card')
    private readonly cardModel: Model<CardDocument>,
    @InjectModel('full')
    private readonly fullModel: Model<FullDocument>,
  ) {
  }

  async getAllCard() {
    return this.cardModel.find()
  }

  async getFullCard(id: string) {
    const champion = await this.fullModel.findOne({id})
    if (!champion) {
      return new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Champion not found!',
      }, HttpStatus.NOT_FOUND);
    }
    return champion
  }

}
