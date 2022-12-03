import React from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useAppDispatch } from "../../app/hooks";
import useScreen from "../../app/hooks/useScreen";

export default function CreateAppoinment() {
  const { isPhone, isTablet, isDesktop } = useScreen();

  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        background: `url(/images/backgroundAppointments.svg)`,
        backgroundRepeat: isPhone ? "repeat" : "no-repeat",
        backgroundSize: isPhone ? "auto" : "cover",
        height: "100vh",
      }}
      width={isDesktop ? "84vw" : "100vw"}
    >
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        height="100%"
        paddingX={isDesktop ? "120px" : isPhone ? "20px" : "50px"}
      >
        <Box
          width="100%"
          height={isDesktop ? "70%" : "88%"}
          bgcolor="#FFFFFF"
          boxShadow="0px 4px 15px rgba(14, 159, 124, 0.3)"
          borderRadius="20px"
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            mt="20px"
            color="primary"
          >
            Медицинская Запись
          </Typography>
          <Box paddingX={isPhone ? "15px" : "80px"} fontSize="20px">
            <Typography variant="h5" marginBottom="10px">
              Введите ИИН пациента:
            </Typography>
            <TextField
              type="number"
              label="ИИН"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
