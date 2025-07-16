export class TelegramUpdateDto {
  update_id: number;
  message?: {
    message_id: number;
    from: {
      id: number;
      is_bot: boolean;
      first_name: string;
      username?: string;
      language_code?: string;
    };
    chat: {
      id: number;
      type: string;
      username?: string;
      first_name?: string;
    };
    date: number;
    text?: string;
  };
}
