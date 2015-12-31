#!/usr/bin/env node

var debug = require('debug')('passport-mongo'),
    app = require('./app');


app.set('port', process.env.PORT || 3000);

var server = app.listen(3000);
