// const mongoose = require('mongoose');
import mongoose from 'mongoose';

// Schema setup
const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
  rsvp_list: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  capacity: Number,
  cost: Number,
});


export default mongoose.model('Event', eventSchema);
// module.exports = mongoose.model('Event', eventSchema);

