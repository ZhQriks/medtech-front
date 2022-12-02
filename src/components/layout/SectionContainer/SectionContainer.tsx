import React from "react";
import useBem from "../../../app/hooks/useBem";

import "./SectionContainer.scss";
import { Box } from "@chakra-ui/react";
import useScreen from "../../../app/hooks/useScreen";

interface ISectionContainerProps {
  children: React.ReactNode;
  className: string;
}

export default function SectionContainer(props: ISectionContainerProps) {
  const { isPhone } = useScreen();
  const { bem, bemBlock } = useBem("SectionContainer");
  return (
    <Box className={bem(bemBlock(), props.className)} px={isPhone ? 4 : 95}>
      {props.children}
    </Box>
  );
}
