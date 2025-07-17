-- CreateEnum
CREATE TYPE "TicketSource" AS ENUM ('INTERNAL', 'WIDGET', 'API', 'EMAIL', 'OTHER');

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "source" "TicketSource" DEFAULT 'INTERNAL';
