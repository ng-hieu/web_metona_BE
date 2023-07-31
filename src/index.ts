import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import { AppDataSource } from './data-source';

const app = express();

AppDataSource.initialize().then(() => {
    console.log('Connect Database Success')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use("", (req, res, next) => {
//     console.log(req.url);
//     console.log(req.params)
//     next()
// })
// app.use('', router)
app.listen(8000, () => {
    console.log('Server 8000 is running')
})
//