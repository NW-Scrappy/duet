"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Bands", [
      {
        band_name: "The Killers",
        instrument_seeking: "drum",
        band_genre: "rock",
        band_link: "https://www.thekillersmusic.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Foster the People",
        instrument_seeking: "clarinet",
        band_genre: "electronic",
        band_link: "https://www.fosterthepeople.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "The Strokes",
        instrument_seeking: "electric",
        band_genre: "rock",
        band_link: "https://www.thekillersmusic.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Homgres G",
        instrument_seeking: "accordion",
        band_genre: "pop",
        band_link: "https://www.thestrokes.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Kings of Leon",
        instrument_seeking: "saxaphone",
        band_genre: "rock",
        band_link: "https://kingsofleon.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
