import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';

import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Conocenos from './pages/Conocenos';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/conocenos">
          <Conocenos />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
