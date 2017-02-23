var Backbone = require('backbone');
var moment = require('moment');

var Message = Backbone.Model.extend({
  idAttribute: '_id',
  // defaults: {
  //   username: ''
  // },
  initialize: function(){
    this.isNew() ? this.set('timestamp', moment().format('LTS')) : this.set('timestamp', this.get('timestamp'));
  }
});

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages',
  comparator: -'timestamp'
});

module.exports = {
  Message,
  MessageCollection
}
