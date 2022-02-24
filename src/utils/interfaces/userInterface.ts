import mongoose from 'mongoose';

export interface ISign extends mongoose.Document {
  firstName: string;
  lastName: string;
  profilePic: string;
  coverPhoto: string;
  bioData: string;
  email: string;
  password: string;
  isActive: boolean;
  provider: string;
}

export interface ILogin {
  email: string;
  password: string;
}
