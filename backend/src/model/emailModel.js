import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // reference to user
});

export const EmailModel = mongoose.model("Email", emailSchema);
