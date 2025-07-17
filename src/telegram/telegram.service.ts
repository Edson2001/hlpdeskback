import { Injectable, Logger } from '@nestjs/common';
import { TelegramUpdateDto } from './dto/telegram-update.dto';
 

@Injectable()
export class TelegramService {
  private readonly logger = new Logger(TelegramService.name);

  async handleUpdate(update: TelegramUpdateDto) {
    const message = update.message;
    if (!message) return;

    const chatId = message.chat.id;
    const text = message.text?.trim();

    this.logger.debug(`Mensagem recebida de ${chatId}: ${text}`);

    // Exemplo simples: só cria ticket se mensagem começa com "abrir"
    if (text?.toLowerCase().startsWith('abrir')) {
      // lógica de criar ticket ou enviar mensagem de confirmação
      this.logger.log(`Criar ticket para chat ${chatId}`);
    } else {
      this.logger.log(`Mensagem ignorada: ${text}`);
    }
  }
}
