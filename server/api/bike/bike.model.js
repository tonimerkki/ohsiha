'use strict';

import mongoose from 'mongoose';

var BikeSchema = new mongoose.Schema({
  name: String,
  info: String,
  id: String,
  availableDocks: String,
  totalDocks: String,
  availableBikes: String,
  active: Boolean
});

export default mongoose.model('Bike', BikeSchema);
