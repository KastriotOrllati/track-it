const Models = require("../models");
const Location = Models.Location;

const saveLocation = async (req, res) => {
//   const id = req.body;

  const {
      latitude,
      longitude,
      location,
      postman_id
  } = req.body;

  const locate = {
    latitude: latitude,
    longitude: longitude,
    location: location,
    postman_id: postman_id,
  };
  try {
    await Location.create(locate);
    res.status(201).json({
      message: "Location saved!",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();

    res.status(200).json(locations);
  } catch (error) {
    console.log(error);
  }
};



const getLocationByPostman = async (req, res) => {
  const id = req.params;
  try {
    const locations = await Location.findAll({ where: { postman_id: id } });
    if (locations) {
      res.status(200).json(locations);
    } else {
      res.status(404).json({ message: "Locations not found!" });
    }
  } catch (error) {}
};

module.exports = {
    saveLocation,
    getAllLocations,
    getLocationByPostman
};
