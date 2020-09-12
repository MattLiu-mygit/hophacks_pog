const express = require('express');
const app = express();
const api = require('./api');
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 8081;
//app.set('port', process.env.PORT || 8081);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', api);
app.use(express.static('static'));

app.use(morgan('dev'));

const path = require('path');
app.use(express.static(path.join(__dirname, 'client', 'build')));

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://matt-liu:Kevin0122@Cluster0.nqegl.mongodb.net/Cluster0?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
  app.listen(port /*app.get('port')*/, function () {
    console.log(
      'API Server Listening on port ' + port /*app.get('port')*/ + '!'
    );
  });
});
