const mongoose = require('mongoose');

module.exports = ()  => {
    mongoose
.connect(
    process.env.MONGODB_URI,
    {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("MongoDb is connected");
}).catch(err => console.log(err.message));

mongoose.connection.on('connected', () =>{
    console.log("Mongoose connected to DB");
});

mongoose.connection.on('error', (err) =>{
    console.log(err.message);
});

mongoose.connection.on('disconnected', () =>{
    console.log("Mongoose connection is disconnected");
});

process.on('SIGINT', ()=> {
    mongoose.connection.close(() => {
        console.log("Mongoose is disconnected due to app termination");
        process.exit(0);
    });
});
}