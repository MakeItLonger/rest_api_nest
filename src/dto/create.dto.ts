import { IsNumber } from 'class-validator';

export default class CreateDto {
  @IsNumber()
  num: number;
}
