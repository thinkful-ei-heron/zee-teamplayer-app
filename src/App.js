
import React from 'react';
import {Route} from 'react-router-dom';
import './main.css';
import Header from './header/header';
import Homepage from './homepage/homepage.js';
import Login from './containers/Login';
import SendMessage from './sendMessage/send-message';
import ReceiveMessage from './receiveMessage/receive-message';
import ResponseMessage from './responseMessage/response-message';
import MessagesList from './messageList/messagesList';



import Footer from './footer/footer';

class App extends React.Component {
  render() { 
    return ( 
      <>
      <Header></Header>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/homepage" component={Homepage} />
      <Route exact path="/messagesList" component={MessagesList} />
      <Route exact path="/send-message" component={SendMessage} />
      <Route exact path="/receive-message" component={ReceiveMessage} />
      <Route exact path="/response-message" component={ResponseMessage} />
      <Footer></Footer>
      </>
    );
  }
}

export default App;