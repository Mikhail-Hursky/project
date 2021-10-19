import { CardDto } from './card.dto';

export default interface CardsPageDto {
  content: CardDto[];
  page: number;
  pages: number;
  elements: number;
}
