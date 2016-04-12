'use strict';

import mongoose from 'mongoose';

var BikeSchema = new mongoose.Schema({
  name: String,
  info: String,
  availableDocks: String,
  totalDocks: String,
  active: Boolean
});

export default mongoose.model('Bike', BikeSchema);
