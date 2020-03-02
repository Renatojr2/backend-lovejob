const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://empregofacil:empregofacil335577@cluster0-wlot6.azure.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);