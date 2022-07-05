import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cards')
export class Cards {
  @PrimaryGeneratedColumn()
  id: number;
}
