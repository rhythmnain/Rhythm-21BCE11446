const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.DATABASE_URL;
let db;

async function connectToDatabase() {
    if (db) return db;
    try {
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        db = client.db(); 
        return db;
    } catch (error) {
        console.error('Could not connect to MongoDB Atlas', error);
        throw error;
    }
}

module.exports = { connectToDatabase };
