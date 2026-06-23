import mongoose, { Schema, Document } from "mongoose";

export interface IDesign extends Document {
  title: string;
  year: string;
  category: string;
  description: string;
  images: string[];
  order: number;
}

const DesignSchema = new Schema<IDesign>(
  {
    title: { type: String, required: true },
    year: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, default: "" },
    images: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Design ||
  mongoose.model<IDesign>("Design", DesignSchema);
