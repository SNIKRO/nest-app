import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('column')
export class Columns {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  column_name: string;
}
