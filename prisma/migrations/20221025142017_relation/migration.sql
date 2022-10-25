/*
  Warnings:

  - You are about to drop the column `listProducts` on the `shoppingkart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "shoppingkart" DROP COLUMN "listProducts";

-- CreateTable
CREATE TABLE "_ProductToShoppingKart" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToShoppingKart_AB_unique" ON "_ProductToShoppingKart"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToShoppingKart_B_index" ON "_ProductToShoppingKart"("B");

-- AddForeignKey
ALTER TABLE "_ProductToShoppingKart" ADD CONSTRAINT "_ProductToShoppingKart_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToShoppingKart" ADD CONSTRAINT "_ProductToShoppingKart_B_fkey" FOREIGN KEY ("B") REFERENCES "shoppingkart"("id") ON DELETE CASCADE ON UPDATE CASCADE;
