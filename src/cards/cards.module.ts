import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsController } from './cards.controller';
import { Cards } from './cards.entity';
import { CardsService } from './cards.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cards])],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
