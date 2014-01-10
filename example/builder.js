#!/usr/bin/env node

var Builder = require('component-builder')
  , fs      = require('fs')
  , react    = require('component-react')
  ;

var builder = new Builder(__dirname);

builder.use(react);

builder.build(function(err, res){
  if (err) console.log(err);
  fs.mkdir('build',function() {});
  fs.writeFileSync('build/build.js', res.require + res.js);
});
