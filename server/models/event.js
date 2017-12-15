import mongoose from 'mongoose';

// Schema setup
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: String,
  description: String,
  rsvp_list: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  capacity: Number,
  cost: Number,
});


export default mongoose.model('Event', eventSchema);

