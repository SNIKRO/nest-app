import { Cards } from 'src/cards/cards.entity';
import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: null })
  token: string;

  @OneToMany(() => Cards, (cards: Cards) => cards.user_id, {
    cascade: true,
  })
  @JoinColumn()
  cards: Cards[];
}
