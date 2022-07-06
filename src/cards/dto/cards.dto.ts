import { IsNotEmpty } from 'class-validator';

export class CreateCardDto {
  @IsNotEmpty()
  readonly content: string;

  readonly user_id: number;
}
