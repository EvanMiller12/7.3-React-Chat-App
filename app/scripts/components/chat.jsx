var React = require('react');

var models = require('../models/chat');

var messageCollection = new models.MessageCollection();

var ChatAppContainer = React.createClass({
  componentWillMount: function(){
    window.setInterval(this.getMessage, 2000);
  },
  getInitialState: function(){
    var self = this;

    messageCollection.fetch().done(function(){
      self.setState({messageCollection: messageCollection});
    });
    return {
      messageList: messageCollection,
      username: this.props.router.username,
      showForm: false
    };
  },

  getMessage: function(){
    var self = this;

    messageCollection.fetch().done(function(){
      self.setState({messageCollection: messageCollection});
    });
  },

  addMessage: function(message){
    var messageList = this.state.messageList;

    messageList.username = this.state.username;
    messageList.create(message);
    this.setState({messageList: messageList});
  },

  addUser: function(user){
    var router = this.props.router;
    router.username = user.username;
    localStorage.setItem('username', user.username);
  },

  handleFormToggle: function(event){
    event.preventDefault();

    var showForm = !this.state.showForm;
    this.setState({showForm: showForm});
  },

  render: function(){

    return (
      <div className="container">
        <header className="well login-nav">
          <span>welcome to the chat room</span> <span className="current-user">{this.state.username}</span>
          <button onClick={this.handleFormToggle} type="button" className="btn btn-default login-btn" aria-label="Right Align">
            <span className="glyphicon glyphicon-plus-sign" aria-hidden="true">Login</span>
          </button>
        </header>

          <div className="row">
            <div className="login-form-container col-md-6 pull-right">

              <LoginForm addUser={this.addUser} handleFormToggle={this.handleFormToggle}/>

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
  handleUser: function(event){
    this.setState({username: event.target.value});
  },

  addUser: function(event){
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({username: ''});
  },

  handleFormToggle: function(event){
    event.preventDefault();
    this.setState({showForm: false})
  },

  render: function(){

    return (
      <form onSubmit={this.addUser} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input onChange={this.handleUser}  id="username" className="form-control" type="text" placeholder="username" />
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
          <input type="submit" value="chat" />
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
                <span className="user">{message.get('username')}</span>
                <span className="current-time">{message.get('timestamp')}</span>
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
  ChatAppContainer: ChatAppContainer
}
