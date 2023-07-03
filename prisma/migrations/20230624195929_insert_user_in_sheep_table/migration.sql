/*
  Warnings:

  - Added the required column `userID` to the `sheep` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sheep" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "female" BOOLEAN NOT NULL DEFAULT true,
    "birth" DATETIME NOT NULL,
    "alive" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "sheep_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_sheep" ("alive", "birth", "created_at", "female", "id", "race", "updated_at") SELECT "alive", "birth", "created_at", "female", "id", "race", "updated_at" FROM "sheep";
DROP TABLE "sheep";
ALTER TABLE "new_sheep" RENAME TO "sheep";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
