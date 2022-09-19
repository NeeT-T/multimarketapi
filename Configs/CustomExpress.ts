import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import routes from '../Routes/index';
import { HealthChecker, LivenessEndpoint, ReadinessEndpoint } from '@cloudnative/health-connect';

const CustomExpress = express();
const healthcheck = new HealthChecker();

CustomExpress.use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .use(cors())
    .use(helmet())
    .use(function(req: Request, res: Response, next: NextFunction) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
});

CustomExpress.use('/liveness', LivenessEndpoint(healthcheck));

CustomExpress.use('/readiness', ReadinessEndpoint(healthcheck));

CustomExpress.use('/', routes);

export default CustomExpress;