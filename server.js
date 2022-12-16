//Dependencies

const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

//set up Express App
const app = express();
const PORT = process.env.PORT || 3001;

//set up handlebars.js as default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/post-routes'))

//starts the server to begin listening
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});