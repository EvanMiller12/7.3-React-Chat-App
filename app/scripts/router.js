var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var ChatAppContainer = require('./components/chat.jsx').ChatAppContainer;
var ChatCollection = require('./models/chat').ChatCollection;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    this.username = localStorage.getItem('username');
  },
  index: function(){
    ReactDOM.render(
      React.createElement(ChatAppContainer, {router: this}),
      document.getElementById('app')
    );
  },
});

var appRouter = new AppRouter();

module.exports = appRouter;
