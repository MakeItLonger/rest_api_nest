import { IsNumber, Min } from 'class-validator';

export default class CreateDto {
  @Min(1)
  @IsNumber()
  num: number;
}
