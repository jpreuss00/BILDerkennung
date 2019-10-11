const express = require('express');
const webserver = express();
const classifier = require('./classifier')

webserver.use(express.urlencoded());
webserver.get('/', express.static('public'));
webserver.post('/api/classify', classifier.handle);
webserver.listen(PORT);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
webserver.listen(port);
