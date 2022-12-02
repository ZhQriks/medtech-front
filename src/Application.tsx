import * as React from "react";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./router/AuthRoute";
import Layout from "./components/layout/Layout";
import { IRouteProps, publicRoutes as routes } from "./router";

export default function Application() {
  const getAllRoutes = useMemo(
    () => {
      const getRoute = (route: IRouteProps) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.isAuthRoute ? (
              <AuthRoute>{route.element}</AuthRoute>
            ) : (
              route.element
            )
          }
        >
          {route.items?.map((routeItem) => getRoute(routeItem))}
        </Route>
      );

      return <Routes>{routes.map((route) => getRoute(route))}</Routes>;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [routes]
  );

  return <Layout>{getAllRoutes}</Layout>;
}
