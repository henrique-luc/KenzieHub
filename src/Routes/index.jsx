import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";

import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Login />
      </Route>
      <Route exact path={"/home"}>
        <Home />
      </Route>
      <Route exact path={"/register"}>
        <Register />
      </Route>
    </Switch>
  );
}
