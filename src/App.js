import React from 'react';
import './App.css';
import { TodoApp } from './components/TodoCards/TodoApp.js';
import { Login } from './components/Login/Login.js';
import moment from "moment";
import { SignUp } from "./components/SignUp/SignUp.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menux from './components/SideBar/Menu.js';


const items = [
{
  description: "Some description text ",
  responsible: {
    name: "Santiago Carrillo",
    email: "sancarbar@gmail"
  },
  status: "Ready",
  dueDate: moment(new Date(156464645646))
},
{
  description: "Learn React",
  responsible:{
    name  : "Willson Melo",
    email : "swilson@mail.com",    
  },  
  status: "Ready",
  dueDate: moment(new Date())
  
}
]


const LoginView = () => (
  <div>
    {localStorage.getItem('isLoggedIn') == "true" ? <div> <Menux /> <TodoApp todoList={items} /> </div> : <Login />}
  </div>
);

const HomeView = () => (
  <div>
    {localStorage.getItem('isLoggedIn') == "true" ? <div> <Menux /> <TodoApp todoList={items} /> </div> : <Login />}
  </div>
);
const SignupView = () =>(
  <div>
    {localStorage.getItem('isLoggedIn') == "true" ? <div> <Menux /> <TodoApp todoList={items} /> </div> : <SignUp />}
  </div>
);

export default class App extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    if (localStorage.getItem('isLoggedIn') === undefined) {
      localStorage.setItem('isLoggedIn', false)
    }

    console.log(localStorage.getItem('isLoggedIn')== "true" );
    
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path ="/index" component={HomeView} />
          <Route exact path="/signUp" component={SignupView} />                 
        </Switch>         
        </div>
      </Router>

    );
  }
}