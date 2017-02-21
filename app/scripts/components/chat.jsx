var React = require('react');

var ChatAppContainer = React.createClass({
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

                <ChatList />

              </div>

              <div className="col-md-6">

                <ChatForm />

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
  render: function(){

    return (
      <form className="chat-form" action="index.html" method="post">
        <h2>Type Your Message</h2>
        <div className="form-group">
          <label htmlFor="message">Chat</label>
          <textarea id="message" className="form-control" type="text" name="" value="" placeholder="type message here.."></textarea>
        </div>
          <input type="submit" name="" value="chat" />
      </form>
    )
  }
});

var ChatList = React.createClass({
  render: function(){

    return (
      <ul>
        <li>
          <div className="chat-container">
            <div className="chat-stamp">
              <span className="user">username</span>
              <span className="current-time">current time</span>
            </div>
              <div className="chat-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          </div>
        </li>
      </ul> 
    )
  }
});

module.exports = {
  ChatAppContainer
}
