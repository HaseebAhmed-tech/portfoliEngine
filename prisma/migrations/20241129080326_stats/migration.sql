/*
  Warnings:

  - You are about to drop the column `userId` on the `Stat` table. All the data in the column will be lost.
  - Added the required column `stats` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Stat" DROP CONSTRAINT "Stat_userId_fkey";

-- DropIndex
DROP INDEX "Stat_userId_text_key";

-- AlterTable
ALTER TABLE "Stat" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "stats" JSONB NOT NULL;
