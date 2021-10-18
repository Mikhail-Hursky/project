import {Controller, Get, Query} from '@nestjs/common';
import {CardService} from "./card.service";

@Controller('card')
export class CardController {

  constructor(private readonly cardService:CardService) {}

  @Get()
  getAllList() {
    return this.cardService.getAllCard()
  }

  @Get('full')
  getFullCard(@Query('id') id) {
    return this.cardService.getFullCard(id)
  }

}
