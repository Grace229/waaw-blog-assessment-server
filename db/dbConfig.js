import mongoose from "mongoose";

const connectDB = async () => {
  try {
 const uri = "mongodb+srv://grace:ginaluv1234@cluster0.a8zji.mongodb.net/WAAW_BLOG?retryWrites=true&w=majority";
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default connectDB;
