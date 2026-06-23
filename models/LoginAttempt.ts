import mongoose, { Schema, Document } from "mongoose";

export interface ILoginAttempt extends Document {
  ip: string;
  attempts: number;
  lastAttempt: Date;
}

const LoginAttemptSchema = new Schema<ILoginAttempt>({
  ip: { type: String, required: true, unique: true },
  attempts: { type: Number, default: 0 },
  lastAttempt: { type: Date, default: Date.now },
});

LoginAttemptSchema.index({ lastAttempt: 1 }, { expireAfterSeconds: 900 });

export default mongoose.models.LoginAttempt ||
  mongoose.model<ILoginAttempt>("LoginAttempt", LoginAttemptSchema);
