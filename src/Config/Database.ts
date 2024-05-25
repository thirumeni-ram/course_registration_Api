import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI!;
if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}

const client = new MongoClient(uri);

const connectDB = async (): Promise<void> => {
  try {
    // Connect the client to the server
    await client.connect();
    // Confirm the connection is successful
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Ensures that the client will close when you finish/error
    await client.close();
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
