import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      maxlength: 25,
      minlength: 6,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    avatar: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Microsoft_Account_Logo.svg/800px-Microsoft_Account_Logo.svg.png",
    },
    projects: [
      {
        type: mongoose.Types.ObjectId,
        ref: "projects",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("users", userSchema);
