
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/dashboard/DashboardPage';
import HomePage from './pages/homepage/HomePage';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <div >
        <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/login"><LoginPage/></Route>
            <Route exact path="/dashboard"><DashboardPage/></Route>
          </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
