
var fs = require('fs'),
    path = require('path'),
    debug = require('debug')('component:jsx'),
    transform = require('react-tools').transform;

module.exports = function(builder) {

  builder.hook('before scripts', function(pkg, next) {

    var scripts = pkg.config.scripts;
    if (!scripts) return next();

    var jsxFiles = scripts.filter(function(file) { return path.extname(file) == '.jsx'; });

    jsxFiles.forEach(function(jsxFile) {

      var jsxPath = pkg.path(jsxFile);
      var name = jsxFile.split('.')[0] + '.js';

      debug('compiling: %s', jsxFile);

      var jsx = fs.readFileSync(jsxPath, 'utf8');

      pkg.addFile('scripts', name, transform(jsx));
      pkg.removeFile('scripts', jsxFile);

    });

    next();

  });

};
