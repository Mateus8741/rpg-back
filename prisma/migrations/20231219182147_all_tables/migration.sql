-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RPGForm" (
    "id" SERIAL NOT NULL,
    "personaName" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,
    "mp" INTEGER NOT NULL,
    "str" INTEGER NOT NULL,
    "agl" INTEGER NOT NULL,
    "des" INTEGER NOT NULL,
    "con" INTEGER NOT NULL,
    "int" INTEGER NOT NULL,
    "maxStr" INTEGER NOT NULL,
    "maxDef" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "RPGForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equip" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "formId" INTEGER NOT NULL,

    CONSTRAINT "Equip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phibia" (
    "id" SERIAL NOT NULL,
    "mobName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "formId" INTEGER NOT NULL,

    CONSTRAINT "Phibia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hability" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "wear" INTEGER NOT NULL,
    "mpCost" INTEGER NOT NULL,
    "formId" INTEGER NOT NULL,

    CONSTRAINT "Hability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invenctory" (
    "id" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "formId" INTEGER NOT NULL,

    CONSTRAINT "Invenctory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- AddForeignKey
ALTER TABLE "RPGForm" ADD CONSTRAINT "RPGForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Equip" ADD CONSTRAINT "Equip_formId_fkey" FOREIGN KEY ("formId") REFERENCES "RPGForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phibia" ADD CONSTRAINT "Phibia_formId_fkey" FOREIGN KEY ("formId") REFERENCES "RPGForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hability" ADD CONSTRAINT "Hability_formId_fkey" FOREIGN KEY ("formId") REFERENCES "RPGForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invenctory" ADD CONSTRAINT "Invenctory_formId_fkey" FOREIGN KEY ("formId") REFERENCES "RPGForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
