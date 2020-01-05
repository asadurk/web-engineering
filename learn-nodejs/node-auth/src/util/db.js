import mongoose from 'mongoose';
import options from './../config';
export const connect = (url = options.dbUrl) => 
    mongoose.connect(url, {});