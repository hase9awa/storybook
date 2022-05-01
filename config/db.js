const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`MongoDB connected: ${conn.connetion.host}`)
    } catch (err) {
        console.error(err)
        process.exir(1)
    }
}

module.exports = connectDB