import Express,{ Request, Response } from 'express'
import { routes } from './Routes/Routes';
import Cors from 'cors'

const app = Express();
app.use(Express.json());
app.use(Cors());
app.use(routes);

app.listen(process.env.PORT || 3000,()=>{
    console.log('Server running...')
});