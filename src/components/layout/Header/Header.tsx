import React, { ReactNode } from "react";
import "./Header.scss";
import { useSelector } from "react-redux";
import useScreen from "../../../app/hooks/useScreen";
import {
  ROUTE_ROOT,
  ROUTE_PROFILE,
} from "../../../router";
import { selectAuth } from "../../../services/auth/auth.selectors";
import { useDispatch } from "../../../app/hooks/useDispatch";
import { logout } from "../../../features/auth/actions";


const Links = [
  {
    label: "Предметы",
    route: ROUTE_ROOT,
  },
  {
    label: "Домашки",
    route: ROUTE_PROFILE,
  },
];

const NavLink = ({ children }: { children: ReactNode }) => (
  <a>
    {children}
  </a>
);

export default function withAction(props : any) {
  const dispatch = useDispatch();
  const authState = useSelector((state) => selectAuth(state));
  const isLoggedIn = authState?.isLoggedIn;
  const email = authState?.user?.client?.email;
  const { isDesktop } = useScreen();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>

    </>
  );
}
