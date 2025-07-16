import { Controller, Post, Body, Headers, HttpCode } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramUpdateDto } from './dto/telegram-update.dto';
 

@Controller('telegram/secreto123') // use um caminho não óbvio!
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post()
  @HttpCode(200) // importante para o Telegram não reenviar
  handleTelegramUpdate(
    @Body() body: TelegramUpdateDto,
    @Headers() headers: Record<string, string>,
  ) {
    return this.telegramService.handleUpdate(body);
  }
}
