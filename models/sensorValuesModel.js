const mongoose = require('mongoose');

const sensorValueSchema = mongoose.Schema({
    sensorValue1: {
      type: Number
    },
    sensorValue2: {
      type: Number,
    }
  });

module.exports = mongoose.model('SensorValue', sensorValueSchema);