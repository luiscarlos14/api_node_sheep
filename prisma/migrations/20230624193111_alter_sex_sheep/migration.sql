/*
  Warnings:

  - You are about to drop the column `sex` on the `sheep` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sheep" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "race" TEXT NOT NULL,
    "female" BOOLEAN NOT NULL DEFAULT true,
    "birth" DATETIME NOT NULL,
    "alive" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_sheep" ("alive", "birth", "created_at", "id", "race", "updated_at") SELECT "alive", "birth", "created_at", "id", "race", "updated_at" FROM "sheep";
DROP TABLE "sheep";
ALTER TABLE "new_sheep" RENAME TO "sheep";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
