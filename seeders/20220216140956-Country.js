"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "countries",
      [
        { id:1 , name: "Albania", code: "AL" },
        { id:2 , name: "Kosova", code: "XK" },
        { id:3 , name: "Australia", code: "AU" },
        { id:4 , name: "Austria", code: "AT" },
        { id:5 , name: "Belgium", code: "BE" },
        { id:6 , name: "Bosnia and Herzegovina", code: "BA" },
        { id:7 , name: "Croatia", code: "HR" },
        { id:8 , name: "Czech Republic", code: "CZ" },
        { id:9 , name: "Denmark", code: "DK" },
        { id:10 , name: "Finland", code: "FI" },
        { id:11 , name: "France", code: "FR" },
        { id:12 , name: "Germany", code: "DE" },
        { id:13 , name: "Greece", code: "GR" },
        { id:14 , name: "Luxembourg", code: "LU" },
        { id:15 , name: "Macedonia", code: "MK" },
        { id:16 , name: "Netherlands", code: "NL" },
        { id:17 , name: "Norway", code: "NO" },
        { id:18 , name: "Slovakia", code: "SK" },
        { id:19 , name: "Slovenia", code: "SI" },
        { id:20 , name: "Spain", code: "ES" },
        { id:21 , name: "Sweden", code: "SE" },
        { id:22 , name: "Switzerland", code: "CH" },
        { id:23 , name: "Turkey", code: "TR" },
        { id:24 , name: "Ukraine", code: "UA" },
        { id:25 , name: "United Arab Emirates", code: "AE" },
        { id:26 , name: "United Kingdom", code: "GB" },
        { id:27 , name: "United States", code: "US" },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('countries', null,{})
  },
};




// "id": 52,
// "name": "Ashkāsham",
// "state_id": 3901,

// "country_id": 1,
// "country_code": "AF",