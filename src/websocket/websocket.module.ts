import { Module, forwardRef } from '@nestjs/common';
import { CommentGateway } from './comment.gateway';
import { TicketsModule } from '../tickets/tickets.module';

@Module({
  imports: [forwardRef(() => TicketsModule)],
  providers: [CommentGateway],
  exports: [CommentGateway],
})
export class WebSocketModule {}
