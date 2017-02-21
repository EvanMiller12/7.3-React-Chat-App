var React = require('react');
var ReactDOM = require('react-dom');

var ChatAppContainer = require('./components/chat.jsx').ChatAppContainer;

ReactDOM.render(
  React.createElement(ChatAppContainer),
  document.getElementById('app')
);

module.exports = {
  ChatAppContainer
}
