import mongoose from 'mongoose';

const gridSchema = new mongoose.Schema({
  author: String,
  pictures: [{ pictureId: String, imageUrl: String }],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const grid = mongoose.model('grid', gridSchema);

export default grid;
