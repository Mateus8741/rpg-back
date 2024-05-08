-- CreateTable
CREATE TABLE "Hero" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "exp" INTEGER NOT NULL,
    "gold" INTEGER NOT NULL,
    "maxAtk" INTEGER NOT NULL,
    "maxDef" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "mp" INTEGER NOT NULL,
    "forca" TEXT NOT NULL,
    "agilidade" TEXT NOT NULL,
    "destreza" TEXT NOT NULL,
    "constituicao" TEXT NOT NULL,
    "inteligencia" TEXT NOT NULL,
    "cabeca" TEXT NOT NULL,
    "peito" TEXT NOT NULL,
    "luvas" TEXT NOT NULL,
    "botas" TEXT NOT NULL,
    "armaEsquerda" TEXT NOT NULL,
    "armaDireita" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Habilidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "desgaste" INTEGER NOT NULL,
    "custoMP" INTEGER NOT NULL,
    "heroId" TEXT NOT NULL,
    CONSTRAINT "Habilidade_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Inventario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "heroId" TEXT NOT NULL,
    CONSTRAINT "Inventario_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Fobia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "monstro" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "heroId" TEXT NOT NULL,
    CONSTRAINT "Fobia_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
