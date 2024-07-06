-- CreateTable
CREATE TABLE "BranchEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "branchId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BranchEvent_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "eventId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Photo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "Photo_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "BranchEvent" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BranchMember" (
    "userId" TEXT NOT NULL,
    "branchId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "owner" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "BranchMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BranchMember_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_BranchMember" ("branchId", "role", "userId") SELECT "branchId", "role", "userId" FROM "BranchMember";
DROP TABLE "BranchMember";
ALTER TABLE "new_BranchMember" RENAME TO "BranchMember";
CREATE UNIQUE INDEX "BranchMember_userId_branchId_key" ON "BranchMember"("userId", "branchId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "BranchEvent_id_key" ON "BranchEvent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BranchEvent_id_branchId_key" ON "BranchEvent"("id", "branchId");

-- CreateIndex
CREATE UNIQUE INDEX "Photo_id_key" ON "Photo"("id");
