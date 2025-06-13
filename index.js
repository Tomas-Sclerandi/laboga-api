const express = require('express')
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 4000;

//* Express middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use(cors());

app.use('/api/dates', require('./routes/dates.route'));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});