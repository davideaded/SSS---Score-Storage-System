/*
  Warnings:

  - Added the required column `value` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "value" INTEGER NOT NULL;
