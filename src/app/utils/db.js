import mongoose from "mongoose";
const connect = async () => {
    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect(process.env.MONGO_URL), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        console.log("Mongodb connectiong successfully")
    } catch (error) {
        throw new Error("eror connecting db")
    }
}
export default connect;