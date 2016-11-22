'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Instantiate application.
var app = (0, _express2.default)();
var PORT = 3000;

// Mount routes.
app.use(_routes2.default);

// Application http listener.
app.listen(PORT);