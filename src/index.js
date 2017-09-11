import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import basicAuth from 'express-basic-auth';
import config from './config.json';
import dotenv from 'dotenv';
import {version} from '../package.json';
import {getUnauthorizedResponse} from './lib/http-basic.js';
import {notify} from './lib/pushwoosh.js';

let app = express();
dotenv.load();
app.server = http.createServer(app);

app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit,
	type: '*/*'
}));

app.use(basicAuth({
  users: JSON.parse(process.env.HTTP_BASIC_AUTH_CREDENTIALS),
  unauthorizedResponse: getUnauthorizedResponse
}));

app.get('/api', (req, res) => {
  res.send({
    name: 'contentful-pns-demo',
    status: 'authenticated',
    version: version
  });
});

app.get('/api/notify', (req, res) => {
  res.send({
    name: 'NOTIFY!'
  });

  // const source = req.headers.source;
  // const contentId = req.body.sys.contentType.sys.id;

  // if (contentId === 'pushNotifications') {
  //   notify(req.body.fields);
  //   res.send(`Sending Pushwoosh notification to NODE_ENV=${process.env.NODE_ENV}`);
  // } else {
  //   res.send(`No push notifications for ${contentId}`);
  // }
});

app.server.listen(process.env.PORT || config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;
