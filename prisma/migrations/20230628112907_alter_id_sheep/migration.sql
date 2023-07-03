/*
  Warnings:

  - The primary key for the `sheep` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `identifier` to the `sheep` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_affiliation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sheepID" TEXT NOT NULL,
    "motherID" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "affiliation_sheepID_fkey" FOREIGN KEY ("sheepID") REFERENCES "sheep" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "affiliation_motherID_fkey" FOREIGN KEY ("motherID") REFERENCES "sheep" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_affiliation" ("created_at", "id", "motherID", "sheepID", "updated_at") SELECT "created_at", "id", "motherID", "sheepID", "updated_at" FROM "affiliation";
DROP TABLE "affiliation";
ALTER TABLE "new_affiliation" RENAME TO "affiliation";
CREATE TABLE "new_haggard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sheepID" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "weight" REAL NOT NULL,
    "price" REAL NOT NULL,
    "soldAmount" REAL NOT NULL,
    "profit" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "haggard_sheepID_fkey" FOREIGN KEY ("sheepID") REFERENCES "sheep" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_haggard" ("created_at", "date", "id", "price", "profit", "sheepID", "soldAmount", "updated_at", "weight") SELECT "created_at", "date", "id", "price", "profit", "sheepID", "soldAmount", "updated_at", "weight" FROM "haggard";
DROP TABLE "haggard";
ALTER TABLE "new_haggard" RENAME TO "haggard";
CREATE TABLE "new_sheep" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "identifier" INTEGER NOT NULL,
    "name" TEXT,
    "userID" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "female" BOOLEAN NOT NULL DEFAULT true,
    "birth" DATETIME NOT NULL,
    "alive" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "sheep_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_sheep" ("alive", "birth", "created_at", "female", "id", "race", "updated_at", "userID") SELECT "alive", "birth", "created_at", "female", "id", "race", "updated_at", "userID" FROM "sheep";
DROP TABLE "sheep";
ALTER TABLE "new_sheep" RENAME TO "sheep";
CREATE TABLE "new_vaccines" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sheepID" TEXT NOT NULL,
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
