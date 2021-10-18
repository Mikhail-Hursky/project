import {Module} from '@nestjs/common';
import {CardController} from './card.controller';
import {CardService} from './card.service';
import {MongooseModule} from "@nestjs/mongoose";
import {CardSchema} from "../shemas/card.schema";
import {FullSchema} from "../shemas/full.schema";

@Module({
  imports: [MongooseModule.forFeature([{name: 'card', schema: CardSchema}, {name: 'full', schema: FullSchema}])],
  controllers: [CardController],
  providers: [CardService]
})
export class CardModule {}
