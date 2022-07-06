import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cards')
export class Cards {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ default: null })
  column_id: number;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
