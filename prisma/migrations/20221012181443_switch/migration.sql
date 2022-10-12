/*
  Warnings:

  - You are about to drop the column `saldo` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "saldo",
ADD COLUMN     "currency" DOUBLE PRECISION NOT NULL DEFAULT 0.00;
