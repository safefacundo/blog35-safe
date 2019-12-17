const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');

//variable de configuracion
const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI || 'mongodb://localhost/blog';

//coneccion a la base de datos
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
.catch(err => console.error(`Connection error ${err}`));

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

//la aplicacion escucha las peticiones
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
