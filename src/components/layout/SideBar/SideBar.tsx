import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ROUTE_PROFILE,
  ROUTE_ROOT,
  ROUTE_APPOINTMENTS,
  ROUTE_LOGIN,
  ROUTE_CREATE_APPOINTMENT,
} from "../../../router";
import React, { useState } from "react";
import useScreen from "../../../app/hooks/useScreen";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "../../../app/hooks/useSelector";
import { selectIsAuthenticated } from "../../../services/auth/auth.selectors";
import { logout } from "../../../features/auth/actions";
import { useDispatch } from "../../../app/hooks/useDispatch";
const drawerWidth = 300;

export default function PermanentDrawerLeft(props: any) {
  const navigate = useNavigate();
  const location = useLocation();

  const { isDesktop } = useScreen();
  const dispatch = useDispatch();

  const { window } = props;
  const isAuthorizedUser = useSelector((state) => selectIsAuthenticated(state));

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const displaySideBar: string = isDesktop ? "flex" : "block";
  const Links = [
    {
      label: "Мой график",
      route: ROUTE_ROOT,
    },
    {
      label: "Сделать Запись",
      route: ROUTE_CREATE_APPOINTMENT,
    },
    {
      label: "Медицинская запись",
      route: ROUTE_APPOINTMENTS,
    },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const getListItem = (label: string, route: string, index: any) => {
    return (
      <ListItem key={index} disablePadding>
        <ListItemButton
          onClick={() => navigate(route)}
          color="primary"
          sx={{
            ":hover": {
              backgroundColor: "#DDFFF2",
            },
            ":visited": {
              backgroundColor: "#DDFFF2",
            },
            px: "24px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: "20px", lineHeight: 1.6 }}
          >
            {label}
          </Typography>
        </ListItemButton>
      </ListItem>
    );
  };

  const drawer = (
    <Box onClick={!isDesktop ? handleDrawerToggle : () => {}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "35px",
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
      <List>
        {Links.map((link, index) => getListItem(link.label, link.route, index))}

        <ListItemButton
          onClick={handleLogout}
          color="primary"
          sx={{
            ":hover": {
              backgroundColor: "#DDFFF2",
            },
            ":visited": {
              backgroundColor: "#DDFFF2",
            },
            px: "24px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: "20px", lineHeight: 1.6 }}
          >
            Выйти
          </Typography>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: displaySideBar }}>
      <Box
        sx={{
          ml: 2,
          mt: 2,
          display: { sm: "block", xs: "block", md: "none" },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <aside>
          <Drawer
            open={mobileOpen}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              display: { sm: "none", xs: "none", md: "block" },
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            {drawer}
          </Drawer>
        </aside>
      )}
      <Box>{props.children}</Box>
    </Box>
  );
}
