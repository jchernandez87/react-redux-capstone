import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CardDetails from './pages/CardDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cities">
            <CardDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
