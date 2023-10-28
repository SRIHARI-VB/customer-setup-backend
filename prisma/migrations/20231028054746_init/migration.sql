-- CreateTable
CREATE TABLE `AddFacility` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `facility_nickname` VARCHAR(191) NOT NULL,
    `floor_number` VARCHAR(191) NULL,
    `location` VARCHAR(191) NOT NULL,
    `service` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
