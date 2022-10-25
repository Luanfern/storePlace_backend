/*
  Warnings:

  - You are about to drop the `_ProductToShoppingKart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToShoppingKart" DROP CONSTRAINT "_ProductToShoppingKart_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToShoppingKart" DROP CONSTRAINT "_ProductToShoppingKart_B_fkey";

-- AlterTable
ALTER TABLE "shoppingkart" ADD COLUMN     "listProducts" INTEGER[];

-- DropTable
DROP TABLE "_ProductToShoppingKart";
