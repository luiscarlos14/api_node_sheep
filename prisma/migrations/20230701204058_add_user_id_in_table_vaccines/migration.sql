/*
  Warnings:

  - Added the required column `userID` to the `vaccines` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_vaccines" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userID" TEXT NOT NULL,
    "sheepID" TEXT,
    "name" TEXT NOT NULL,
    "indications" TEXT NOT NULL,
    "dosage" REAL NOT NULL,
    "date" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "vaccines_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vaccines_sheepID_fkey" FOREIGN KEY ("sheepID") REFERENCES "sheep" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_vaccines" ("created_at", "date", "dosage", "id", "indications", "name", "sheepID", "updated_at") SELECT "created_at", "date", "dosage", "id", "indications", "name", "sheepID", "updated_at" FROM "vaccines";
DROP TABLE "vaccines";
ALTER TABLE "new_vaccines" RENAME TO "vaccines";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
