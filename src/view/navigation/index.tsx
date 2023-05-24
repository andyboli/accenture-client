import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Router, { RouteType } from "./Router";

const renderRoutes = (routes: RouteType[]): React.ReactElement[] =>
  routes?.map(({ children, routes, ...routeProps }, i) => (
    <Route
      key={`${routeProps.path}-${i}`}
      {...routeProps}
      element={<Suspense fallback="Loading..">{children}</Suspense>}
    >
      {!!routes && renderRoutes(Object.values(routes))}
    </Route>
  ));

const Navigation: React.FC = () => (
  <BrowserRouter>
    <Routes>{renderRoutes(Object.values(Router))}</Routes>
  </BrowserRouter>
);

export default Navigation;
