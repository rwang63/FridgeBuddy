import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import {App} from './App';

let server: any = new App().expressApp;
server.listen(process.env.PORT || 4000);
console.log("Server running on port: 4000 or Azure port");