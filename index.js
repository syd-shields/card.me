const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan')
const path = require('path')

const userRoute = require('./routes/users')

dotenv.config();

//middleware
app.use(express.json())
app.use(morgan('common'))

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('connected db')).catch((err) => console.log(err))

app.use('/api/user', userRoute)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));

//  app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//    });    
//}

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("listening on port" + PORT)
});