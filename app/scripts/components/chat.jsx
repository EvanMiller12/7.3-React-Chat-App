var React = require('react');

var models = require('../models/chat');

var ChatAppContainer = React.createClass({
  getInitialState: function(){
    var messageCollection = new models.MessageCollection();
    var self = this;
    messageCollection.fetch().done(function(){
      self.setState({messageCollection: messageCollection});
    });
    return {
      messageList: messageCollection
    };
  },
  addMessage: function(message){
    var messageList = this.state.messageList;
    messageList.create(message);
    this.setState({messageList: messageList});
  },
  render: function(){

    return (
      <div className="container">
        <header className="well login-nav">
          <button type="button" className="btn btn-default login-btn" aria-label="Right Align">
            <span className="glyphicon glyphicon-plus-sign" aria-hidden="true">Login</span>
          </button>
        </header>

          <div className="row">
            <div className="login-form-container col-md-6 pull-right">

              <LoginForm />

            </div>
          </div>


            <div className="row">
              <div className="col-md-6">

                <ChatList messageList={this.state.messageList} />

              </div>

              <div className="col-md-6">

                <ChatForm addMessage={this.addMessage} />

              </div>
            </div>
          </div>
    )
  }
});

var LoginForm = React.createClass({
  render: function(){

    return (
      <form className="login-form" action="index.html" method="post">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" className="form-control" type="text" value="" placeholder="username" />
        </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input id="password" className="form-control" type="text" value="" placeholder="password" />
          </div>
            <div className="create-account">
              <a href="#">Create Account</a>
            </div>
            <input type="submit" name="" value="login" />
      </form>
    )
  }
});

var ChatForm = React.createClass({
  handleMessageChange: function(event){
    this.setState({message: event.target.value});
  },
  addMessage: function(event){
    event.preventDefault();

    this.props.addMessage(this.state);
    this.setState({message: ''});
  },
  render: function(){

    return (
      <form onSubmit={this.addMessage} className="chat-form">
        <h2>Type Your Message</h2>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea onChange={this.handleMessageChange} id="message" className="form-control" type="text" placeholder="type message here.."></textarea>
        </div>
          <input type="submit" name="" value="chat" />
      </form>
    )
  }
});

var ChatList = React.createClass({
  render: function(){
    var messageItems = this.props.messageList.map(function(message){

      return (
          <li key={message.cid}>
            <div className="chat-container">
              <div className="chat-stamp">
                <span className="user"></span>
                <span className="current-time">time stamp</span>
              </div>
                <div className="chat-content">
                  {message.get('message')}
                </div>
            </div>
          </li>
      );
    });
    return (
      <ul>
      {messageItems}
      </ul>
    )
  }
});

module.exports = {
  ChatAppContainer
}
