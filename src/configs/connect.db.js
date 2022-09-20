const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect database successfully!!');
    } catch (error) {
        console.error('Connect database failed!!');
        process.exit(1);
    }
};
mongoose.connection.on('error', (error) => {
    console.log(error.message);
    console.log('Connected MongoDB error..........');
    process.exit(1);
});
process.on('SIGINT', async () => {
    console.log('You are performing a server shutdown!');
    await mongoose.connection.close();
    process.exit(0);
});
module.exports = connectDB;
