//CONSTANTS
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/mern_notebook'

//PACKAGE REQUIRES
const http = require('http')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const socketIo = require('socket.io')
const morgan = require('morgan')
const path = require('path')
const webpack = require('webpack');
const webpackConfig = require('../webpack.config')

require('mongoose').connect(MONGO_URI, err =>{
  if (err) throw err;
  console.log(`MongoDB connected to ${MONGO_URI}`)
})

//APP DECLARATION
const app = express();
const server = http.createServer(app)
const io = socketIo(server);

//WEBPACK CONFIG
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))
app.use(require('webpack-hot-middleware')(compiler));

//GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//SOCKET STUFF
io.on('connection', socket => {
  console.log('user connected')
  socket.on('message', message =>{
    console.log('message:', message)
  })
})

//ROUTES
app.use('/api', require('./routes/api'))

app.get('*', (req, res) => {
  let indexPath = path.join(__dirname, '../index.html')
  res.sendFile(indexPath);
})

//SERVER LISTEN
server.listen(PORT, err => {
  if(err) throw err;
  console.log(`Server listening at http://localhost:${PORT}`);
});
