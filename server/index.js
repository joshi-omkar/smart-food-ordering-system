const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8081;

//making instance of the app
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('server is up and running');
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});

app.use(cors());