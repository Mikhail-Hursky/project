import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {CardDocument} from "../shemas/card.schema";
import {Model} from "mongoose";
import {filter} from "rxjs";
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
    return this.fullModel.findOne({id})
  }

}
