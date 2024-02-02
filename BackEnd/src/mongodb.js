import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/User")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log("Error connecting to MongoDB");
  });

const LoginSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
});

export const Login = mongoose.model("Login", LoginSchema);
