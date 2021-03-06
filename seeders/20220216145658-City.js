'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      await queryInterface.bulkInsert('cities', [
        { id:1 , name: "Prishtina", country_id: 2 },
        { id:2 , name: "Prizreni", country_id: 2 },
        { id:3 , name: "Ferizaji", country_id: 2 },
        { id:4 , name: "Mitrovica", country_id: 2 },
        { id:5 , name: "Vushtrri", country_id: 2 },
        { id:6 , name: "Gjilani", country_id: 2 },
        { id:7 , name: "Tirana", country_id: 1 },
        { id:8 , name: "Durresi", country_id: 1 },
        { id:9 , name: "Berati", country_id: 1 },
        { id:10 , name: "Gjirokaster", country_id: 1 },
        { id:11 , name: "Vlora", country_id: 1 },
        { id:12 , name: "Sarandë", country_id: 1 },
        { id:13 , name: "Elbasan", country_id: 1 },
        { id:14 , name: "Fier", country_id: 1 },
        { id:15 , name: "Sydney", country_id: 3 },
        { id:16 , name: "Melbourne", country_id: 3 },
        { id:17 , name: "Brisbane", country_id: 3 },
        { id:18 , name: "Adelaide", country_id: 3 },
        { id:19 , name: "Vienna", country_id: 4 },
        { id:20 , name: "Linz", country_id: 4 },
        { id:21 , name: "Salzburg", country_id: 4 },
        { id:22 , name: "Graz", country_id: 4 },
        { id:23 , name: "Melk", country_id: 4 },
        { id:24 , name: "Brussels", country_id: 5 },
        { id:25 , name: "Bruges", country_id: 5 },
        { id:26 , name: "Liege", country_id: 5 },
        { id:27 , name: "Charleroi", country_id: 5 },
        { id:28 , name: "Sarajevo", country_id: 6 },
        { id:29 , name: "Tuzla", country_id: 6 },
        { id:30 , name: "Banja Luka", country_id: 6 },
        { id:31 , name: "Dubrovnik", country_id: 7 },
        { id:32 , name: "Zagreb", country_id: 7 },
        { id:33 , name: "Split", country_id: 7 },
        { id:34 , name: "Rijeka", country_id: 7 },
        { id:35 , name: "Prague", country_id: 8 },
        { id:36 , name: "Brno", country_id: 8 },
        { id:37 , name: "Liberec", country_id: 8 },
        { id:38 , name: "Copenhagen", country_id: 9 },
        { id:39 , name: "Helsingor", country_id: 9 },
        { id:40 , name: "Aarhus", country_id: 9 },
        { id:41 , name: "Helsinki", country_id: 10 },
        { id:42 , name: "Turku", country_id: 10 },
        { id:43 , name: "Oulu", country_id: 10 },
        { id:44 , name: "Paris", country_id: 11 },
        { id:45 , name: "Marseille", country_id: 11 },
        { id:46 , name: "Nice", country_id: 11 },
        { id:47 , name: "Lyon", country_id: 11 },
        { id:48 , name: "Berlin", country_id: 12 },
        { id:49 , name: "Munich", country_id: 12 },
        { id:50 , name: "Hamburg", country_id: 12 },
        { id:51 , name: "Frankfurt", country_id: 12 },
        { id:52 , name: "Stuttgart", country_id: 12 },
        { id:53 , name: "Athens", country_id: 13 },
        { id:54 , name: "Thessaloniki", country_id: 13 },
        { id:55 , name: "Luxembourg", country_id: 14 },
        { id:56 , name: "Petange", country_id: 14 },
        { id:57 , name: "Rodange", country_id: 14 },
        { id:58 , name: "Skopje", country_id: 15 },
        { id:59 , name: "Bitola", country_id: 15 },
        { id:60 , name: "Struga", country_id: 15 },
        { id:61 , name: "Amsterdam", country_id: 16 },
        { id:62 , name: "Rotterdam", country_id: 16 },
        { id:63 , name: "Utretch", country_id: 16 },
        { id:64 , name: "The Hague", country_id: 16 },
        { id:65 , name: "Oslo", country_id: 17 },
        { id:66 , name: "Bergen", country_id: 17 },
        { id:67 , name: "Kristiansand", country_id: 17 },
        { id:68 , name: "Bratislava", country_id: 18 },
        { id:69 , name: "Banska", country_id: 18 },
        { id:70 , name: "Nitra", country_id: 18 },
        { id:71 , name: "Ljubljana", country_id: 19 },
        { id:72 , name: "Maribor", country_id: 19 },
        { id:73 , name: "Ptuj", country_id: 19 },
        { id:74 , name: "Madrid", country_id: 20 },
        { id:75 , name: "Barcelona", country_id: 20 },
        { id:76 , name: "Sevilla", country_id: 20 },
        { id:77 , name: "Mallorca", country_id: 20 },
        { id:78 , name: "Stockholm", country_id: 21 },
        { id:79 , name: "Helsinborg", country_id: 21 },
        { id:80 , name: "Malmo", country_id: 21 },
        { id:81 , name: "Gothenburg", country_id: 21 },
        { id:82 , name: "Linkoping", country_id: 21 },
        { id:83 , name: "Zurich", country_id: 22 },
        { id:84 , name: "Bern", country_id: 22 },
        { id:85 , name: "Geneva", country_id: 22 },
        { id:86 , name: "Basel", country_id: 22 },
        { id:87 , name: "Instanbul", country_id: 23 },
        { id:88 , name: "Izmir", country_id: 23 },
        { id:89 , name: "Bursa", country_id: 23 },
        { id:90 , name: "Kyiv", country_id: 24 },
        { id:91 , name: "Lviv", country_id: 24 },
        { id:92 , name: "Odesa", country_id: 24 },
        { id:93 , name: "Dubai", country_id: 25 },
        { id:94 , name: "Abu Dhabi", country_id: 25 },
        { id:95 , name: "Al Sharjah", country_id: 25 },
        { id:96 , name: "London", country_id: 26 },
        { id:97 , name: "Manchester", country_id: 26 },
        { id:98 , name: "Liverpool", country_id: 26 },
        { id:99 , name: "Burnley", country_id: 26 },
        { id:100 , name: "Everton", country_id: 26 },
        { id:101 , name: "Brentford", country_id: 26 },
        { id:102 , name: "Chicago", country_id: 27 },
        { id:103 , name: "New York", country_id: 27 },
        { id:104 , name: "Los Angeles", country_id: 27 },
        { id:105 , name: "Phoenix", country_id: 27 },
        { id:106 , name: "San Antonio", country_id: 27 },
        { id:107 , name: "San Diego", country_id: 27 },
        { id:108 , name: "Philadelphia", country_id: 27 },

      ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
