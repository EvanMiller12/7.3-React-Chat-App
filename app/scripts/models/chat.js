var Backbone = require('backbone');

var Chat = Backbone.Model.extend({
  idAttribute: '_id'
});

var ChatCollection = Backbone.Collection.extend({
  model: Chat,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages'
});

module.exports = {
  Chat,
  ChatCollection
}
