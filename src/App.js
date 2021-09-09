import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/CategorySlice';
import Home from './pages/Home';
import Details from './pages/Details';
import NavBar from './components/NavBar';

function App() {
  const dispatch = useDispatch();
  const regionsStatus = useSelector((state) => state.categories.status);
  const regions = useSelector((state) => state.categories.list);

  useEffect(() => {
    if (regionsStatus === 'idle') {
      dispatch(fetchData());
    }
  }, []);

  const myRoutes = () => regions.map((el) => (
    <Route key={el.id} path={`/details/${el.id}`}>
      <Details
        id={el.id}
        name={el.name}
        cases={el.confirmedToday}
        deaths={el.deathsToday}
        newDeaths={el.newDeaths}
        newCases={el.newCases}
        intensive={el.intensiveCare}
        hospitalised={el.hospitalised}
      />
    </Route>
  ));

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {myRoutes()}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
