
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectClient } from './db.js';

const port = 3001;


const app = express();
app.use(bodyParser.json());
app.use(cors());

let db;
const COLLECTION_NAME = 'data'
connectClient().then(database => {
  db = database;
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});


app.get('/data',  async (req, res) => {
    try {
        const collection = db.collection(COLLECTION_NAME);
        const response = await collection.find({});
        const data = await response.toArray()
        console.log(data)
        if (response) {
            res.send(data);
        } else {
            res.status(404).send({});
        }
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.get('/data/name=:name',  async (req, res) => {
    try {
        const collection = db.collection(COLLECTION_NAME);
        const response = await collection.find({name: req.params.name});
        const data = await response.toArray()
        console.log(data)
        if (response) {
            res.send(data);
        } else {
            res.status(404).send({});
        }
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.post('/data',  async(req, res) => {
    const data = req.body;
    
    try {
    const collection = db.collection(COLLECTION_NAME);
        await collection.insertOne(data);
    console.log('Received data:', data);
    res.status(200).send({ message: 'Data received successfully' });
    } catch (error) {
        console.error('Error storing data:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
    
});

app.get('/data/gpa=:gpa', async (req, res) => {  
    try {
        const db = await connectClient();
        const scholarshipsCollection = db.collection(COLLECTION_NAME);
    
        // Convert the GPA stored in the database to a number for comparison
        const userGPA = parseFloat(req.params.gpa);  
    
        const scholarships = await scholarshipsCollection.find({
          gpa: { $lte: userGPA }  
        }).toArray();
    
        res.json(scholarships);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
});



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});