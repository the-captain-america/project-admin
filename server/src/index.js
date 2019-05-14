const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/src/paths/home-page').default;

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

// const path = require('path');

// const app = express();

// // Priority serve any static files.
// app.use(express.static(path.resolve(__dirname, '../client/build')));

// // Answer API requests.
// app.get('/api', function (req, res) {
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello from the custom server!"}');
// });

// // All remaining requests return the React app, so it can handle routing.
// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
