import mongoose from 'mongoose';
import schema from './schema.js';

//Creation du model en utilisant le module Mongoose
const model = mongoose.model('model', schema);

export default model;
