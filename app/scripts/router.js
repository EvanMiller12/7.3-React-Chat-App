var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var ChatAppContainer = require('./components/chat.jsx').ChatAppContainer;
var ChatCollection = require('./models/chat').ChatCollection;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  
  index: function(){
    ReactDOM.render(
      React.createElement(ChatAppContainer),
      document.getElementById('app')
    );
  },
});

var appRouter = new AppRouter();

module.exports = appRouter;
