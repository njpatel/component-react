# component-react

A plugin to transpile [React](https://github.com/facebook/react) javascript files ('.js' or '.jsx') for the component builder.

## Install

```bash
$ npm install component-react
```

## Usage
  
Add your `.jsx` files to the `react` array in your `component.json`:

```javascript
{
  "scripts": [
    "index.js"
  ],
  "react": [
    "button.jsx"
  ]
}
```

Then either use the ```component``` command:

```bash
$ component build --use component-react
```

Or use the plugin during your custom build process:

```javascript
var Builder = require('component-builder')
  , react = require('component-react')
  , fs = require('fs')
  ;

var builder = new Builder(__dirname);

builder.use(react);

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

## Authors

* Neil Jagdish Patel <njpatel@gmail.com>

## License

(The MIT License)

Copyright (c) 2013 Neil Jagdish Patel <njpatel@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
