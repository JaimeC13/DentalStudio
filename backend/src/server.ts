import express from 'express';
import morgan from 'morgan';
import { db } from './config/db';
import especialistaRouter from './routes/especialistaRouter';
import serviciosRouter from './routes/serviciosRouter';
import citasRouter from './routes/citasRouter';
import autenticacionRouter from './routes/autenticacionRouter';




async function conectBD() {
    try {
        await db.authenticate();
        await db.sync({ alter: true }); 
        console.log('Database connected');

    } catch (error) {
        console.log('error', error);       

    }
    
}
conectBD();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/especialistas', especialistaRouter);
app.use('/api/servicios', serviciosRouter);
app.use('/api/citas', citasRouter);
app.use('/api/autenticacion', autenticacionRouter);




export default app;