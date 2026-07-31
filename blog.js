const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const http = require('http');
const routes = require('./blog/routes/routes');
const databaseService = require('./blog/services/databaseService');

dotenv.config();

databaseService.initSequelize();
databaseService.syncModels();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

const port = 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
