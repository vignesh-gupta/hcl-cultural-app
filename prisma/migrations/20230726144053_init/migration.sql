-- CreateTable
CREATE TABLE "Survey" (
    "id" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "persona" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "surveyQ1" INTEGER NOT NULL,
    "surveyQ2" INTEGER NOT NULL,
    "surveyQ3" INTEGER NOT NULL,
    "surveyQ4" INTEGER NOT NULL,
    "surveyQ5" INTEGER NOT NULL,
    "surveyQ6" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Survey_id_key" ON "Survey"("id");
