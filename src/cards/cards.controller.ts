import { Body, Controller, Get, Post } from '@nestjs/common';
import { Cards } from './cards.entity';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/cards.dto';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Post()
  createCard(@Body() dto: CreateCardDto) {
    return this.cardsService.createCard(dto);
  }
  @Get()
  getAll(): Promise<Cards[]> {
    return this.cardsService.getAllPosts();
  }
}
