import React from 'react';
import { BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";
import Home from "./components/home";
import Portal from  "./components/portal";
class App extends React.Component {
  render() {
    return (
      <div>
          <Switch>
          <Route exact path='/' render={()=><Home/>}/>
          <Route exact path='/portal' render={()=><Portal/>}/>
          </Switch>
      </div>
    );
  }

}

export default App;

