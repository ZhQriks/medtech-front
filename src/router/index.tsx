import * as React from "react";

import IndexPage from "../pages/Home";
import Appointments from "../pages/Appointments";
import NotFoundPage from "../pages/NotFound";
import RegisterPage from "../pages/Auth/Register";
import LoginPage from "../pages/Auth/Login";
import CreateAppoinment from "../pages/CreateAppoinment/createAppoinment";
export interface IRouteProps {
  path: string;
  element: React.ReactNode;
  items?: IRouteProps[];
  [key: string]: any;
}

export const ROUTE_ROOT = "/";
export const ROUTE_NOT_FOUND = "*";
export const ROUTE_LOGIN = "/login";
export const ROUTE_REGISTER = "/register";
export const ROUTE_PROFILE = "profile";
export const ROUTE_APPOINTMENTS = "/appointments";
export const ROUTE_CREATE_APPOINTMENT = "/appointment";
export const ROUTE_COURSE = "/courses/:course_id";
export const ROUTE_LESSON = "/courses/:course_id/lessons/:lesson_id";
export const ROUTE_MENTORS = "/mentors";

export const publicRoutes: IRouteProps[] = [
  {
    path: ROUTE_ROOT,
    element: <IndexPage />,
    isAuthRoute: true,
  },
  {
    path: ROUTE_APPOINTMENTS,
    element: <Appointments />,
    isAuthRoute: true,
  },
  {
    path: ROUTE_CREATE_APPOINTMENT,
    element: <CreateAppoinment />,
    isAuthRoute: true,
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
