import PlayerLsi15 from './ComponentsLsi15/PlayerLsi15/PlayerLsi15'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarLsi15 from './ComponentsLsi15/NavbarLsi15/NavbarLsi15'
import PageNotFoundLsi15 from './ComponentsLsi15/PageNotFoundLsi15/PageNotFoundLsi15'
import AboutLsi15 from './ComponentsLsi15/AboutLsi15/AboutLsi15'
import DisplayStatsLsi15 from './ComponentsLsi15/DisplayStatsLsi15/DisplayStatsLsi15'
function App() {
  return (
    <div className="App">
       <Router>
<NavbarLsi15/>
<Switch>
  <Route  path="/" exact component={PlayerLsi15}/>
  <Route path="/about" exact component={AboutLsi15}/>
  <Route path="/display_stats/:player" exact component={DisplayStatsLsi15}/>
  <Route exact component={PageNotFoundLsi15}/>
</Switch>

</Router>
      




    </div>
  );
}

export default App;
