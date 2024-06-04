-- CreateTable
CREATE TABLE "Account" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "active" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "AccountLogin" (
    "timestamp" DATETIME NOT NULL PRIMARY KEY DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "platform" TEXT NOT NULL
);
