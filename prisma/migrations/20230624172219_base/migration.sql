-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "farmName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "sheep" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "race" TEXT NOT NULL,
    "sex" BOOLEAN NOT NULL,
    "birth" DATETIME NOT NULL,
    "alive" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "affiliation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sheepID" INTEGER NOT NULL,
    "motherID" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "affiliation_sheepID_fkey" FOREIGN KEY ("sheepID") REFERENCES "sheep" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "affiliation_motherID_fkey" FOREIGN KEY ("motherID") REFERENCES "sheep" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "vaccines" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sheepID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "indications" TEXT NOT NULL,
    "dosage" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "vaccines_sheepID_fkey" FOREIGN KEY ("sheepID") REFERENCES "sheep" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "haggard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sheepID" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "weight" REAL NOT NULL,
    "price" REAL NOT NULL,
    "soldAmount" REAL NOT NULL,
    "profit" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "haggard_sheepID_fkey" FOREIGN KEY ("sheepID") REFERENCES "sheep" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
