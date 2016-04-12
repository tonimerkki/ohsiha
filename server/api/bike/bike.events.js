/**
 * Bike model events
 */

'use strict';

import {EventEmitter} from 'events';
var Bike = require('./bike.model');
var BikeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
BikeEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Bike.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    BikeEvents.emit(event + ':' + doc._id, doc);
    BikeEvents.emit(event, doc);
  }
}

export default BikeEvents;
