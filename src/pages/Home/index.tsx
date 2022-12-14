import { Container } from "@mui/system";
import clsx from "clsx";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import useScreen from "../../app/hooks/useScreen";
import PermanentDrawerLeft from "../../components/layout/SideBar/SideBar";
import Image from "../../../public/images/backgrounds.png";
import { Box, Button, ButtonBase, Typography } from "@mui/material";
import { ROUTE_CREATE_APPOINTMENT } from "../../router";

export default function Home() {
  const { isPhone, isTablet, isDesktop } = useScreen();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: isPhone ? "repeat" : "no-repeat",
        backgroundSize: isPhone ? "auto" : "cover",
        height: "100vh",
        width: isDesktop ? "84vw" : "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "35px",
        }}
      >
        <img
          src="/images/logo_damumed.svg"
          alt="damumed"
          width={50}
          height={50}
        />
        <Typography
          variant="h6"
          color="primary"
          sx={{ my: 2, fontWeight: 600, fontSize: "24px" }}
        >
          Damumed
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "35px",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          color="White"
          align="center"
          sx={{ my: 4, fontWeight: 600, fontSize: "50px" }}
        >
          Используйте современные <br /> методы формализации
        </Typography>
        <button
          onClick={() => navigate(ROUTE_CREATE_APPOINTMENT)}
          style={{
            color: "black",
            fontWeight: 600,
            backgroundColor: "white",
            width: "130px",
            height: "48px",
            boxShadow: "0px 4px 10px rgba(9, 119, 87, 0.3)",
            borderRadius: "25px",
          }}
        >
          Начать
        </button>
      </Box>
    </Box>
  );
}
