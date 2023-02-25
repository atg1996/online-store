require('dotenv').config();

//application
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//routers
const itemRoutes = require('./routers/itemRoutes')
const categoryRoutes = require('./routers/categoryRoutes')
const userRoutes = require('./routers/userRoutes')

const cors = require('cors')
const helmet = require('helmet')
const xss = require("xss-clean")

const connectDB = require('./db/connect')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1)
app.use(cors())
app.use(helmet())
app.use(xss())


app.use('/api/v1/items', itemRoutes)
app.use('/api/v1/categories', categoryRoutes)
app.use('/api/v1/users', userRoutes)


app.get('/', (req, res) => {
    res.send('this route returns 200');
});

const start = async () => {
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();

