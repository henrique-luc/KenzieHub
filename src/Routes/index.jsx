import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";

import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path={"/"}>
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path={"/home"}>
        <Home authenticated={authenticated} />
      </Route>
      <Route exact path={"/register"}>
        <Register authenticated={authenticated} />
      </Route>
    </Switch>
  );
}
