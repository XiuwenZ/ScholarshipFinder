import express from "express"
import cors from 'cors'
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server listening on port ${port}`);
});

// testing