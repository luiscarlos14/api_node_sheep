/*
  Warnings:

  - You are about to alter the column `dosage` on the `vaccines` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_vaccines" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sheepID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "indications" TEXT NOT NULL,
    "dosage" REAL NOT NULL,
    "date" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "vaccines_sheepID_fkey" FOREIGN KEY ("sheepID") REFERENCES "sheep" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_vaccines" ("created_at", "date", "dosage", "id", "indications", "name", "sheepID", "updated_at") SELECT "created_at", "date", "dosage", "id", "indications", "name", "sheepID", "updated_at" FROM "vaccines";
DROP TABLE "vaccines";
ALTER TABLE "new_vaccines" RENAME TO "vaccines";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
