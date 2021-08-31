import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { publicRoutes } from "../../router/routes";

const AppRouter: React.FC = () => {
  return (
    <Switch>
      {publicRoutes.map(({Component, path, exact}) =>
        <Route component={Component} path={path} key={path} exact={exact} />
      )}
      <Redirect to="/login"/>
    </Switch>
  )
}

export default AppRouter;
