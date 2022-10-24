/*
  Warnings:

  - A unique constraint covering the columns `[shoppingKartId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_shoppingKartId_key" ON "users"("shoppingKartId");
