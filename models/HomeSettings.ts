import mongoose, { Schema, Document } from "mongoose";

export interface IHomeSettings extends Document {
  photographyHeroImage: string;
  filmHeroImage: string;
  filmHeroVideo: string;
  designHeroImage: string;
  stripText: string;
}

const HomeSettingsSchema = new Schema<IHomeSettings>(
  {
    photographyHeroImage: { type: String, default: "" },
    filmHeroImage: { type: String, default: "" },
    filmHeroVideo: { type: String, default: "" },
    designHeroImage: { type: String, default: "" },
    stripText: { type: String, default: "Baku, Azerbaijan — 2026" },
  },
  { timestamps: true }
);

export default mongoose.models.HomeSettings ||
  mongoose.model<IHomeSettings>("HomeSettings", HomeSettingsSchema);
