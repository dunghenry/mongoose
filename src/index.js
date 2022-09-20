const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const port = process.env.PORT || 4000;
const connectDB = require('./configs/connect.db');
const routes = require('./routes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
connectDB();
routes(app);
app.get('/', (req, res) => {
    res.send('Haha');
});

app.listen(port, () =>
    console.log(`Server listening on http://localhost:${port}`),
);
