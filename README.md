# component-react

A plugin to transpile [React](https://github.com/facebook/react) .jsx files for the component builder.

## Install

$ npm install component-react

## Usage
  
Add your `.jsx` files to the `scripts` array in your `component.json`:

```javascript
{
	"scripts": [
		"index.js",
		"button.jsx"
	]
}
```

Use the plugin during your build process:

```javascript
var Builder = require('component-builder');
var react = require('component-react');
var fs = require('fs');

var builder = new Builder(__dirname);

builder.use(less);

builder.build(function (err, res) {
	if (err) {
		throw err
	}

	fs.writeFileSync('build/build.js', res.require + res.js);

	if (res.css) {
		fs.writeFileSync('build/build.css', res.css);
	}
});
```

## License
MIT

## Author

Neil Jagdish Patel <njpatel@gmail.com>
