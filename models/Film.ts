import mongoose, { Schema, Document } from "mongoose";

export interface IFilm extends Document {
  title: string;
  year: string;
  duration: string;
  type: string;
  description: string;
  thumbnailUrl: string;
  youtubeUrl: string;
  order: number;
}

const FilmSchema = new Schema<IFilm>(
  {
    title: { type: String, required: true },
    year: { type: String, required: true },
    duration: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, default: "" },
    thumbnailUrl: { type: String, default: "" },
    youtubeUrl: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Film ||
  mongoose.model<IFilm>("Film", FilmSchema);
