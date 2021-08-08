
import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import TopNav from './components/TopNav/TopNav';
import UserModel from './Model/UserModel';
import DashboardPage from './pages/dashboard/DashboardPage';
import HomePage from './pages/homepage/HomePage';
import LoginPage from './pages/login/LoginPage';
import jsonUsers from './data/users.json';
import jsonClasses from './data/classes.json';

function App() {

  const [users, setUsers] = useState(jsonUsers.map(plainUser => new UseRModel(plainUser)));
  const [classes, setClasses] = useState(jsonClasses.map(plainClass => new ClassModel(plainClass)));  
  const [userRole, setUserRole] = useState(new UserModel(     
    {
      id : "1",
      fname : "John",
      lname : "Doe",
      email : "johndoe@gmail.com",
      role : "manager",
      password : "12345"
  }));

  // const [userRole, setUserRole] = useState(new UserModel(
  //   {
  //     id : "2",
  //     fname : "Jack",
  //     lname : "Smith",
  //     email : "jacksmith@gmail.com",
  //     role : "parent",
  //     password : "54321",
  // }
  // ));

  return (
    <div >
        <HashRouter>
          <Switch>
            <Route exact path="/"><HomePage userRole={userRole}/></Route>
            <Route exact path="/login"><LoginPage/></Route>
            <Route exact path="/dashboard">
              <TopNav userRole={userRole}/>
              <DashboardPage userRole={userRole}/>
            </Route>
          </Switch>
        <Footer/>
        </HashRouter>
    </div>
  );
}

export default App;
