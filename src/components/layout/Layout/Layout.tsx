import * as React from "react";
import Header from "../Header/Header";

import "./Layout.scss";
import useBem from "../../../app/hooks/useBem";
import PermanentDrawerLeft from "../SideBar/SideBar";

interface ILayoutProps {
  children?: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const { bemBlock } = useBem("Layout");

  return (
    <div className={bemBlock()}>
      <PermanentDrawerLeft>{props.children}</PermanentDrawerLeft>
    </div>
  );
}
