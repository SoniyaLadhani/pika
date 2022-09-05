import { FC } from "react";

import { Home } from "../screens/Home";
import { ListScreen } from "../screens/ListScreen";
import { Login } from "../screens/Login";

interface Route {
  key: string;
  title: string;
  path: string;
  component: FC;
}

export const routes: Array<Route> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    component: Home,
  },
  {
    key: "list-route",
    title: "List",
    path: "/list",
    component: ListScreen,
  },
  {
    key: "login-route",
    title: "Login",
    path: "/login",
    component: Login,
  },
];
