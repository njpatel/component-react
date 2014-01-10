/** @jsx React.DOM */
var React = require('react');
var Button = require('./button');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <p>This should be rendered by React</p>
        <Button />
      </div>
    );
  }
});

React.renderComponent(<Main />,
                      document.getElementById('example'));
