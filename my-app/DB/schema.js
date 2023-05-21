import mongoose from 'mongoose';

// le schema pour ma base de donnee 
const schema = new mongoose.Schema({
  options: {
    type: String,
  },
  output: {
    type: String,
  },
  req: String,
  ip: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default schema;
