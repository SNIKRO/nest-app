import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cards } from './cards.entity';
import { CreateCardDto } from './dto/cards.dto';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Cards) private cardsRepository: Repository<Cards>,
  ) {}

  async createCard(dto: CreateCardDto): Promise<Cards> {
    const card = new Cards();
    card.content = dto.content;
    card.user_id = dto.user_id;

    return this.cardsRepository.save(card);
  }

  async getAllPosts() {
    return this.cardsRepository.find({ relations: ['user'] });
  }
}
