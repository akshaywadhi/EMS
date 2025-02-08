import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  email: { type: String},
  subject: { type: String },
  message: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User"}, // reference to user
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"}, // Reference to user
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Admin ID for replies
});

export const EmailModel = mongoose.model("Email", emailSchema);
