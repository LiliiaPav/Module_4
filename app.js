import express from 'express';
import {} from 'dotenv/config';
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser';

const app=express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

//set up a middleware before your routes
app.use(bodyParser.json())

//load routes into our main file
app.use('/', routes);
const PORT = process.env.PORT || 8000;

const init = async () =>{
    try {
        await connectDB(process.env.DB);
        console.log('Connected to the database');
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}
 
init()