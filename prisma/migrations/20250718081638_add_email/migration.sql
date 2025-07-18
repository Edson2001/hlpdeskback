-- CreateTable
CREATE TABLE "MailServiceConfig" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL DEFAULT 'IMAP',
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tls" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "organizationId" TEXT,

    CONSTRAINT "MailServiceConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MailServiceConfig_name_key" ON "MailServiceConfig"("name");

-- AddForeignKey
ALTER TABLE "MailServiceConfig" ADD CONSTRAINT "MailServiceConfig_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
