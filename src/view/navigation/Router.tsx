import React, { PropsWithChildren } from "react";

import routesJson from "./routes.json";

const routes = routesJson as { [key: string]: string };

const HomePage = React.lazy(
  () => import(/* webpackChunkName: "home" */ "../pages/HomePage")
);

export type RouteType = {
  children: JSX.Element | PropsWithChildren<React.ReactNode>;
  strict?: boolean;
  path: string;
  routes?: { [index: string]: RouteType };
};

const Router: { [index: string]: RouteType } = {
  main: {
    children: <HomePage />,
    path: routes.home,
    strict: true,
  },
};

export default Router;
