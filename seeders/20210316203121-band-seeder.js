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
      {
        band_name: "Radio Moscow",
        instrument_seeking: "Drums",
        band_genre: "rock",
        band_link: "https://www.facebook.com/radiomoscowband//",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Bright Light Social Hour",
        instrument_seeking: "Accordian",
        band_genre: "rock",
        band_link: "https://www.thebrightlightsocialhour.com/home/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Van Morrison",
        instrument_seeking: "Electric Guitar",
        band_genre: "rock",
        band_link: "https://www.vanmorrison.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Airbourne",
        instrument_seeking: "Electric Guitar",
        band_genre: "rock",
        band_link: "https://airbournerock.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Luke Combs",
        instrument_seeking: "Acoustic Guitar",
        band_genre: "rock",
        band_link: "https://www.lukecombs.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Al Green",
        instrument_seeking: "Saxophone",
        band_genre: "soul",
        band_link: "https://www.facebook.com/algreen/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Wu Tang Clan",
        instrument_seeking: "Drummer",
        band_genre: "Gangsta Rap",
        band_link: "https://wutangclan.net/the-clan/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Wu Tang Clan",
        instrument_seeking: "Drummer",
        band_genre: "Gangsta Rap",
        band_link: "https://wutangclan.net/the-clan/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "George Thorogood",
        instrument_seeking: "Saxophone",
        band_genre: "Blues",
        band_link: "https://www.georgethorogood.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "The Jimmy Hendrix Experience",
        instrument_seeking: "Drums",
        band_genre: "Blues",
        band_link: "https://www.jimihendrix.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "AC/DC",
        instrument_seeking: "Vocals",
        band_genre: "Rock",
        band_link: "https://pwrup.acdc.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "AC/DC",
        instrument_seeking: "Vocals",
        band_genre: "Rock",
        band_link: "https://pwrup.acdc.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Tenacious D",
        instrument_seeking: "Drums",
        band_genre: "Rock",
        band_link: "https://www.tenaciousd.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "ZZ Top",
        instrument_seeking: "Drums",
        band_genre: "Blues",
        band_link: "https://www.zztop.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        band_name: "Local H",
        instrument_seeking: "Electric Guitar",
        band_genre: "Rock",
        band_link: "http://www.localh.com//",
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
