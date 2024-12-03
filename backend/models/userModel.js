import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    edad: {
      type: Date,
      required: true,
    },

    estatura: {
      type: Number,
      required: true,
    },

    peso: {
      type: Number,
      required: true,
    },

    systmedida: {
      type: Boolean,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
