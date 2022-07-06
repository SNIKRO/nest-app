import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('comments')
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  card_id: number;

  @Column()
  content: string;
}
