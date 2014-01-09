// component-less was used as the base, so will be very similar to that

var async = require('async')
  , fs = require('fs')
  , path = require('path')
  , transform = require('react-tools').transform
  ;

module.exports = function(builder, options) {
  options = options || {};

  builder.hook('before scripts', function(builder, callback) {
    var files = builder.config.react;

    if (!files) return callback();

    if (!builder.config.scripts)
      builder.config.scripts = [];

    async.each(files, function(file, done) {
      var data = null
        , orig = builder.path(file)
        ;
 
      try {
        data = fs.readFileSync(orig, 'utf8');
      } catch(error) {
        return done(new Error('Error while reading ' + orig + ':' + error));
      }
 
      var newData = transform(data);
      var newFile = path.basename(file, path.extname(file)) + '.js';
      builder.addFile('scripts', newFile, newData);

      done();
    }, callback);
  });
}
