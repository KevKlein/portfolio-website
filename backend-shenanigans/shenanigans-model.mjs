// Models for the Shenanigan Collection

import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: "Our server couldn't access the scooter shenanigans database. Try again later." });
    } else  {
        console.log('Successfully accessed scooter shenanigans database.');
    }
});

// SCHEMA: Define the collection's schema.
const shenaniganSchema = mongoose.Schema({
	description: { 
        type: String, 
        required: true },
	score: { 
        type: Number, 
        required: true,
        min: 0,
        max: 10 },
    date: {
        type: Date, 
        required: true,
        min: '1914-01-01',
        default: Date.now },
    link: {
        type: String,
        required: true }
});

// Compile the model from the schema 
// by defining the collection name "shenanigans".
const shenanigans = mongoose.model('Shenanigans', shenaniganSchema);


// CREATE model *****************************************
const createShenanigan = async (description, score, date, link) => {
    const shenanigan = new shenanigans({ 
        description: description, 
        score: score, 
        date: date,
        link: link 
    });
    return shenanigan.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveShenanigans = async () => {
    const query = shenanigans.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveShenaniganByID = async (_id) => {
    const query = shenanigans.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteShenaniganById = async (_id) => {
    const result = await shenanigans.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateShenanigan = async (_id, description, score, date, link) => {
    const result = await shenanigans.replaceOne({_id: _id }, {
        description: description,
        score: score,
        date: date,
        link: link 
    });
    return { 
        _id: _id, 
        description: description,
        score: score,
        date: date,
        link: link 
    }
}

// EXPORT the variables for use in the controller file.
export { createShenanigan, retrieveShenanigans, retrieveShenaniganByID, updateShenanigan, deleteShenaniganById }