/*
  Warnings:

  - You are about to drop the column `total_price` on the `extracts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `extracts` table. All the data in the column will be lost.
  - Added the required column `date` to the `extracts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUser` to the `extracts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `extracts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "extracts" DROP COLUMN "total_price",
DROP COLUMN "userId",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "idUser" INTEGER NOT NULL,
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;
