import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StudentsVal from './Pages/Students';
import Home from './Pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import AddTodo from './Pages/AddTodo';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/studentVal" component={StudentsVal} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route path="/edit/:id" component={Edit} />
        <Route exact path="/todo/add" component={AddTodo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
