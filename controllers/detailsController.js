const Models = require("../models");
const City = Models.cities;
const Country = Models.countries;
const Role = Models.roles;

const getCountry = async (req, res) => {
  const countries = await Country.findAll();
  return res.status(201).json(countries);
};

const getCity = async (req, res) => {
  const { id } = req.params;
  try {
    const cities = await City.findAll({ where: { country_id: id } });
    return res.status(201).json(cities);
  } catch (error) {
    console.log(error);
  }
};
const getRole = async (req, res) => {
  try {
    const roles = await Role.findAll();
    return res.status(201).json(roles);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCountry,
  getCity,
  getRole,
};
