import { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import TopNav from "./components/TopNav/TopNav";
import UserModel from "./Model/UserModel";
import DashboardPage from "./pages/dashboard/DashboardPage";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/login/LoginPage";
import jsonUsers from "./data/users.json";
import jsonClasses from "./data/classes.json";
import ClassModel from "./Model/ClassModel";

function App() {          
  const [users, setUsers] = useState(
    jsonUsers.map((plainUser) => new UserModel(plainUser))
  );
  const [classes, setClasses] = useState(
    jsonClasses.map((plainClass) => new ClassModel(plainClass))
  );
  const [userRole, setUserRole] = useState(1); //1: Admin, -1: customer
   

  function switchUser(){
    setUserRole(userRole * -1);
  }

      function createNewClass(className, classInstructor, classDesc, classRoom, classPrice, classDay, classTime){
        const newClass = new ClassModel({
          classid : classes[classes.length-1].classid+1,
          cname : className,
          instructor : classInstructor,
          description : classDesc,
          schedule : [{day: classDay, time: classTime}],
          price : classPrice,
          room : classRoom
        })

        setClasses(classes.concat(newClass));
        
      }

  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <TopNav/>
            <HomePage userRole={userRole} classes={classes} />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/dashboard">
            <TopNav userRole={userRole} onAddClass={createNewClass} switchUser={switchUser}/>
            <DashboardPage userRole={userRole} classes={classes}/>
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
