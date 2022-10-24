/*
  Warnings:

  - A unique constraint covering the columns `[shoppingKartId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "shoppingKartId" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "shoppingkart" (
    "id" SERIAL NOT NULL,
    "listProducts" INTEGER[],

    CONSTRAINT "shoppingkart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "extracts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,
    "listProducts" INTEGER[],

    CONSTRAINT "extracts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_shoppingKartId_key" ON "users"("shoppingKartId");
