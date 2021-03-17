"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Musicians", [
      {
        musician_name: "Wendi Freeman",
        instrument_playing: "guitar",
        musician_genre: "rock",
        musician_link: "https://www.DaemonFamiliar.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Eric Montoya",
        instrument_playing: "vocals",
        musician_genre: "rock",
        musician_link: "https://www.EricMontoya.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Bill Goers",
        instrument_playing: "drums",
        musician_genre: "pop",
        musician_link: "https://www.BillGoers.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Pablo Mena",
        instrument_playing: "guitar",
        musician_genre: "latin",
        musician_link: "https://www.DaemonFamiliar.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Stewart Copeland",
        instrument_playing: "drums",
        musician_genre: "inter",
        musician_link: "https://www.ThePolice.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Andy Summers",
        instrument_playing: "guitar",
        musician_genre: "inter",
        musician_link: "https://www.ThePolice.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Brent Willems",
        instrument_playing: "bass",
        musician_genre: "newage",
        musician_link: "https://www.DaemonFamiliar.com/",
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
