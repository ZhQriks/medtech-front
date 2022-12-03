import * as React from "react";

import IndexPage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import RegisterPage from "../pages/Auth/Register";
import LoginPage from "../pages/Auth/Login";
export interface IRouteProps {
  path: string;
  element: React.ReactNode;
  items?: IRouteProps[];
  [key: string]: any;
}

export const ROUTE_ROOT = "/";
export const ROUTE_NOT_FOUND = "*";
export const ROUTE_LOGIN = "login";
export const ROUTE_REGISTER = "/register";
export const ROUTE_PROFILE = "profile";
export const ROUTE_COURSES = "/courses";
export const ROUTE_COURSE = "/courses/:course_id";
export const ROUTE_LESSON = "/courses/:course_id/lessons/:lesson_id";
export const ROUTE_MENTORS = "/mentors";

export const publicRoutes: IRouteProps[] = [
  {
    path: ROUTE_ROOT,
    element: <IndexPage />,
    isAuthRoute: false,
  },
  {
    path: ROUTE_NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: ROUTE_REGISTER,
    element: <RegisterPage />,
  },
  {
    path: ROUTE_LOGIN,
    element: <LoginPage />,
  },
];
