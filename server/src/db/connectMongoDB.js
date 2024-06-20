import mongoose from "mongoose"

const connecMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error to connect mongoDB: ${error.message}`)
    process.exit(1)
  }
}

export default connecMongoDB