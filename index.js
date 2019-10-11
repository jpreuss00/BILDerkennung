const express = require('express');
const webserver = express();
const classifier = require('./classifier')
const PORT = process.env.PORT || 8080;

webserver.use(express.urlencoded());
webserver.get('/', express.static('public'));
webserver.post('/api/classify', classifier.handle);
webserver.listen(PORT);

