const userRoute = require('./userRoute');
const postRoute = require('./postRoute');

function handleRoutes(app) {
  app.use('/user', userRoute);
  app.use('/post', postRoute);
}

module.exports = handleRoutes;
