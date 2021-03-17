"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Musicians", [
      {
        musician_name: "John Doe",
        instrument_playing: "accordion",
        musician_genre: "latin",
        musician_link: "https://github.com/rafaelrosas19",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Bruno Mars",
        instrument_playing: "clarinet",
        musician_genre: "jazz",
        musician_link: "https://www.brunomars.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "John Legend",
        instrument_playing: "saxophone",
        musician_genre: "rap",
        musician_link: "https://www.johnlegend.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Ed Sheeran",
        instrument_playing: "electric",
        musician_genre: "country",
        musician_link: "https://www.edsheeran.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Taylor Swift",
        instrument_playing: "clarinet",
        musician_genre: "folk",
        musician_link: "https://www.taylorswift.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Ariana Grande",
        instrument_playing: "electric",
        musician_genre: "reggae",
        musician_link: "https://www.arianagrande.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Selena Gomez",
        instrument_playing: "drum",
        musician_genre: "jazz",
        musician_link: "https://www.selenagomez.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Justin Bieber",
        instrument_playing: "saxophone",
        musician_genre: "latin",
        musician_link: "https://www.justinbiebermusic.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Miley Cyrus",
        instrument_playing: "flute",
        musician_genre: "pop",
        musician_link: "https://www.mileycyrus.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Wendi Freeman",
        instrument_playing: "guitar",
        musician_genre: "rock",
        musician_link: "https://www.DaemonFamiliar.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        musician_name: "Miley Cyrus",
        instrument_playing: "flute",
        musician_genre: "pop",
        musician_link: "https://www.mileycyrus.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
