'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Instantiate application.
var app = (0, _express2.default)();
var PORT = 3000;

// Root route handler.
app.get('/', function (req, res) {
  return res.json({ message: 'SCV good to go, sir!' });
});

// Application http listener.
app.listen(PORT);