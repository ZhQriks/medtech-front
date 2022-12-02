import clsx from "clsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import useScreen from "../../app/hooks/useScreen";
import PermanentDrawerLeft from "../../components/layout/SideBar/SideBar"


export default function Home() {
  const { isPhone, isTablet, isDesktop } = useScreen();

  const dispatch = useAppDispatch();

  return (
   <PermanentDrawerLeft/>
  );
}
