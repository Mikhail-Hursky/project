import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { CardService } from './card.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllList() {
    return this.cardService.getAllCard();
  }

  @UseGuards(JwtAuthGuard)
  @Get('full')
  getFullCard(@Query('id') id) {
    return this.cardService.getFullCard(id);
  }
}
