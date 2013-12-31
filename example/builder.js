#!/usr/bin/env node

var Builder = require('component-builder')
  , fs      = require('fs')
  , react    = require('../')
  ;

var builder = new Builder(__dirname);

builder.use(react);

builder.build(function(err, res){
  if (err) console.log(err);
  fs.writeFileSync('build.js', res.require + res.js);
});
