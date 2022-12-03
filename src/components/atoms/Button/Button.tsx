import React from "react";
import useBem from "../../../app/hooks/useBem";

import { Box, Button as MuiButton } from "@mui/material";
import useScreen from "../../../app/hooks/useScreen";

interface IButtonProps {
  label: string;
  color: "primary" | "secondary";
  outline?: boolean;
  onClick?: () => void;
  submit?: boolean;
}

function Button(props: IButtonProps) {
  const { isPhone, isDesktop } = useScreen();

  const { bem, bemBlock } = useBem("Button");
  return (
    <MuiButton
      variant={props.outline ? "outlined" : "contained"}
      color={props.color}
      sx={{
        boxShadow: "none",
        textTransform: "none",
        color: "#FFFFFF",
        fontSize: "18px",
        borderRadius: "18px",
      }}
      size="large"
      onClick={props.onClick}
      type={props.submit ? "submit" : "button"}
    >
      <Box fontSize={isPhone ? "14px" : "18px"}>{props.label}</Box>
    </MuiButton>
  );
}

Button.defaultProps = {
  outline: false,
  submit: false,
};

export default Button;
