import './models/index';
// import bodyParser from 'body-parser';
import emailTemplateRoute from './routes/emailTemplateRoutes';
import express, { Application, Request, Response, NextFunction } from 'express';
require('dotenv').config();
import cors from 'cors';
import logger from 'morgan';

const app: Application = express();
app.use(cors({ origin: true, credentials: true }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

const add = (a: number, b: number): number => a + b;
app.get('/', (req: Request, res: Response, next: NextFunction) => {
	console.log('req : ', req);
	console.log(add(100, 200));
	res.send('Hello World!');
});

// app.post('/emails', postEmailTemplate);
// app.get('/emails', getEmailTemplates);
// app.get('/emails/:id', getEmailTemplateById);
// app.patch('/emails/:id', updateEmailTemplate);
// app.delete('/emails/:id', deleteEmailTemplate);

app.use('/api/v1/emails', emailTemplateRoute);

// app.listen(parseInt(`${process.env.PORT}`), () =>
// 	console.log(`Server running at http://localhost:${process.env.PORT}`)
// );

app.listen(8000, () => console.log(`Server running at http://localhost:8000`));
