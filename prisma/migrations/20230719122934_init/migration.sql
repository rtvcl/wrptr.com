-- CreateTable
CREATE TABLE "Place" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "location_name" VARCHAR(255) NOT NULL,
    "url_ig" VARCHAR(255) NOT NULL,
    "url_tt" VARCHAR(255) NOT NULL,
    "url_map" VARCHAR(255) NOT NULL,
    "affordability" INTEGER NOT NULL,
    "quitetude" INTEGER NOT NULL,
    "drinks" INTEGER NOT NULL,
    "connectivity" INTEGER NOT NULL,
    "is_alcohol" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);
