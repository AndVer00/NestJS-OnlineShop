/*
  Warnings:

  - You are about to drop the `Discount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserHaveDiscount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserHaveDiscount" DROP CONSTRAINT "UserHaveDiscount_discountId_fkey";

-- DropForeignKey
ALTER TABLE "UserHaveDiscount" DROP CONSTRAINT "UserHaveDiscount_userId_fkey";

-- DropTable
DROP TABLE "Discount";

-- DropTable
DROP TABLE "UserHaveDiscount";
