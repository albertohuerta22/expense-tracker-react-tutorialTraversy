/* eslint-disable no-unused-vars */
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' }); // lets dotenv know where file is

connectDB();

const transactions = require('./routes/transactions');
const { connect } = require('mongoose');

const app = express();

app.use(express.json());

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
