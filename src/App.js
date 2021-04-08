import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/styles.css';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Capacitaciones from './pages/Capacitaciones';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quienessomos">
          <QuienesSomos />
        </Route>
        <Route path="/capacitaciones">
          <Capacitaciones />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
