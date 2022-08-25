const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const connection = require('./dbConfig')

const app = express();
const PORT = 5500;


app.use(bodyParser.json());
app.use(express.json())
app.use(cors());

const developerRoute = require('./routes/developer');
const userRoute = require('./routes/user')

app.use('/user', userRoute);
app.use('/developer', developerRoute);


app.get('/', (req, res) => {
    res.json({ message: "Success" })
})

app.listen(PORT, (err) => {
    if (err) { console.log(err); return }
    console.log(`Server listening at http://localhost:${PORT}`)
})
