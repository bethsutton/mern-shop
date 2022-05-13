import mongoose from 'mongoose';

// npm i colors then import colors to server.js

const connectDB = async () => {
	try {
		// Connection
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(`Error: ${error.message}`.red.underline);
		process.exit(1);
	}
};

export default connectDB;
