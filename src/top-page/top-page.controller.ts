import { FindTopPageDto } from './dto/top-page.dto';
import { TopPageModel } from './top-page.model';
import { ConfigService } from '@nestjs/config';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  HttpCode,
} from '@nestjs/common';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}
  @Get(':id')
  async get(@Param(':id') id: string) {}
  @Delete(':id')
  async delete(@Param(':id') id: string) {}
  @Patch(':id')
  async patch(@Param(':id') id: string, @Body() dto: TopPageModel) {}
  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {}
}
