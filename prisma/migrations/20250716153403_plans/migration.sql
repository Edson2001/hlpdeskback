/*
  Warnings:

  - You are about to drop the column `duration` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `userLimit` on the `Plan` table. All the data in the column will be lost.
  - Added the required column `annualPrice` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buttonText` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthlyPrice` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "duration",
DROP COLUMN "name",
DROP COLUMN "price",
DROP COLUMN "userLimit",
ADD COLUMN     "annualPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "buttonText" TEXT NOT NULL,
ADD COLUMN     "features" TEXT[],
ADD COLUMN     "highlight" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "monthlyPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "WidgetConfig" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "buttonText" TEXT DEFAULT '💬 Suporte',
    "modalTitle" TEXT DEFAULT 'Reportar um Problema',
    "buttonColor" TEXT DEFAULT '#1f2937',
    "headerColor" TEXT DEFAULT '#1f2937',
    "logoUrl" TEXT,
    "showPriority" BOOLEAN NOT NULL DEFAULT true,
    "theme" TEXT DEFAULT 'light',
    "successMessage" TEXT DEFAULT 'Seu ticket foi registrado com sucesso!',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WidgetConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationPlan" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "OrganizationPlan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WidgetConfig_orgId_key" ON "WidgetConfig"("orgId");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationPlan_organizationId_planId_key" ON "OrganizationPlan"("organizationId", "planId");

-- AddForeignKey
ALTER TABLE "WidgetConfig" ADD CONSTRAINT "WidgetConfig_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationPlan" ADD CONSTRAINT "OrganizationPlan_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationPlan" ADD CONSTRAINT "OrganizationPlan_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
