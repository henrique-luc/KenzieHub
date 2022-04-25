import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import Home from "../Components/Pages/Home";

import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={"/home"}>
        <Home />
      </Route>
      <Route exact path={"/register"}>
        <Register />
      </Route>
      <Route exact path={"/"}>
        <Login />
      </Route>
    </Switch>
  );
}
