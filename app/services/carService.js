const carRepository = require("../repositories/carRepository");

module.exports = {
  getById(carid) {
    return carRepository.findById(carid);
  },
  findAll() {
    return carRepository.getAll();
  },
  create(car) {
    return carRepository.create(car);
  },
  updateById(car) {
    return carRepository.updateById(car);
  },
  deleteById(car) {
    return carRepository.deleteById(car);
  },
};