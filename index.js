// component-less was used as the base, so will be very similar to that

var async = require('async')
  , fs = require('fs')
  , path = require('path')
  , transform = require('react-tools').transform
  ;

function isJSX(filename) {
  var ext = path.extname(filename);
  
  if (ext === '.jsx')
    return true;
  
  return false;
}

module.exports = function(builder, options) {
  options = options || {};

  builder.hook('before scripts', function(builder, callback) {
    if (!builder.config.scripts) {
      return callback();
    }

    // Make a copy of the list of files to parse
    var files = builder.config.scripts.slice(0);

    async.each(files, function(file, cb) {
      var data = null
        , orig = builder.path(file)
        ;
      
      if (!isJSX(file))
        return cb();
      
      try {
        data = fs.readFileSync(orig, 'utf8');
      } catch(error) {
        return cb(new Error('Error while reading ' + jsx + ':' + error));
      }
      
      var newData = transform(data);
      var newFile = path.basename(file, path.extname(file)) + '.js';
      builder.addFile('scripts', newFile, newData);
      builder.removeFile('scripts', file);

      cb();

    }, callback);
  });
}
