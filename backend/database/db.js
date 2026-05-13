import mongoose from "mongoose"
import { log }  from "console"

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.DB)
        log("Database Connected Successfull")
    }
    catch (error) {
        log(`Data base not connect${error}`)

    }
}
export default connectdb;