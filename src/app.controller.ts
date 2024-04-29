import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import CreateDto from './dto/create.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/:id')
  getHello(@Param('id', ParseIntPipe) id: number) {
    if (id < 1) {
      throw new BadRequestException('id must be greater than 0');
    }
    return id;
  }

  @Post('create')
  create(@Body() dto: CreateDto) {
    return dto;
  }
}
