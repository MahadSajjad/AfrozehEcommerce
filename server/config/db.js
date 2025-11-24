const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const { MONGO_USERNAME, MONGO_PASSWORD,MONGO_NAME } = process.env;
const connectDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@ecommercecodev.gg8t4ol.mongodb.net/`, { dbName: MONGO_NAME })
        console.log("MongoDB connected successfully".bgGreen)
    } catch(error) {
        console.log("Error in connecting MongoDB".bgRed)
        console.error(error)
    }
}
module.exports = connectDb