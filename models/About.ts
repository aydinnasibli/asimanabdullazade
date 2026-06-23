import mongoose, { Schema, Document } from "mongoose";

export interface IRecognition {
  title: string;
  detail: string;
}

export interface IAbout extends Document {
  portrait: string;
  tagline: string;
  bio: string[];
  recognition: IRecognition[];
  email: string;
  location: string;
  roles: string;
}

const AboutSchema = new Schema<IAbout>(
  {
    portrait: { type: String, default: "" },
    tagline: { type: String, default: "" },
    bio: [{ type: String }],
    recognition: [
      {
        title: { type: String, required: true },
        detail: { type: String, required: true },
      },
    ],
    email: { type: String, default: "" },
    location: { type: String, default: "" },
    roles: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.About ||
  mongoose.model<IAbout>("About", AboutSchema);
