-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Branch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "overview" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Branch" ("id", "name") SELECT "id", "name" FROM "Branch";
DROP TABLE "Branch";
ALTER TABLE "new_Branch" RENAME TO "Branch";
CREATE UNIQUE INDEX "Branch_id_key" ON "Branch"("id");
CREATE UNIQUE INDEX "Branch_name_key" ON "Branch"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
