import React from "react";
import { Box, Typography } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import useScreen from "../../app/hooks/useScreen";

export default function CreateAppoinment() {
  const { isPhone, isTablet, isDesktop } = useScreen();

  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        background: `url(/images/backgroundAppointments.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: isPhone ? "auto" : "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box display="flex" alignItems="center" width="100%" height="100%">
        <Box
          width={isDesktop ? "35%" : "95%"}
          height={isDesktop ? "70%" : "88%"}
          bgcolor="#FFFFFF"
          boxShadow="0px 4px 15px rgba(14, 159, 124, 0.3)"
          borderRadius="20px"
        >
          <Typography variant="h4" align="center">
            {" "}
            Медецинская Запись
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
