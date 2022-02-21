import './App.css';
import  './Component/Website.css'
import Website from './Component/Website';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Portfolio from './Component/Portfolio';
import Page from './Component/Page'
import Contact from './Component/Contact'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Website/>
        <Switch>
          <Route exact  path='/' component={Home}/>
          <Route exact  path='/About' component={About}/>
          <Route  exact path='/Service' component={Service}/>
          <Route exact path='/Portfolio' component={Portfolio}/>
          <Route exact  path='/Page' component={Page}/>
          <Route exact path='/Contact' component={Contact}/>
          
        </Switch>

      </Router>
    </div>
  );
}

export default App;
