import mongoose, { Schema, Document } from "mongoose";

export interface IPhotography extends Document {
  title: string;
  year: string;
  count: string;
  format: string;
  description: string;
  images: string[];
  order: number;
}

const PhotographySchema = new Schema<IPhotography>(
  {
    title: { type: String, required: true },
    year: { type: String, required: true },
    count: { type: String, required: true },
    format: { type: String, required: true },
    description: { type: String, default: "" },
    images: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Photography ||
  mongoose.model<IPhotography>("Photography", PhotographySchema);
