import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LaptopIcon from "@mui/icons-material/Laptop";
import ViewInAr from "@mui/icons-material/ViewInAr";
import { useNavigate } from "react-router-dom";
import UserDashboardDefault from "./userdefault.component";

import { TextSnippet, Lan, Approval, Home } from "@mui/icons-material/";
import { ExitToApp } from "@mui/icons-material/";
import Giris from "./DashboardContentComponents/girisyap.component";
import Belgeler from "./DashboardContentComponents/belgeler.component";
import Onayal from "./DashboardContentComponents/onayal.component";
import Onaytestleri from "./DashboardContentComponents/onaytestleri.component";
import Departmanlar from "./DashboardContentComponents/departmanlar.component";
import Kullanıcılar from "./DashboardContentComponents/consent_management";

import "./assets/css/fonts.css";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function UserDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedContentIndex, setSelectedContentIndex] = React.useState(0);

  const itemComponents = [
    <UserDashboardDefault />,
    <Giris />,
    <Onayal />,
    <Belgeler />,
    <Onaytestleri />,
    <Departmanlar />,
    <Kullanıcılar />,
  ];

  const Navigate = useNavigate();

  const handleLogOut = () => {
    Navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: "white" }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="rgba(0,0,0)"
            sx={{ fontFamily: "Nunito" }}
          >
            ONAYVERİYORUM
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {[
            { text: "Anasayfa", icon: <Home /> },
            { text: "Giriş", icon: <LaptopIcon /> },
            { text: "Onay al", icon: <ViewInAr /> },
            { text: "Belgeler", icon: <TextSnippet /> },
            { text: "Kullanıcı Ekle", icon: <Approval /> },
            { text: "Departmanlar", icon: <Lan /> },
          ].map((text, index) => (
            <ListItem key={text.text} disablePadding sx={{ display: "flex" }}>
              <ListItemButton
                onClick={() => setSelectedContentIndex(index)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "rgba(11, 127, 171);",
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      style={{ fontFamily: "Roboto", fontWeight: "bold" }}
                    >
                      {text.text}
                    </Typography>
                  }
                  sx={{
                    opacity: open ? 1 : 0,
                    color: "rgba(0,0,0,.5)",
                    fontFamily: "Nunito",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "flex" }}>
            <ListItemButton
              onClick={handleLogOut}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ExitToApp sx={{ color: "darkred" }} />
              </ListItemIcon>
              <ListItemText
                primary="Çıkış Yap"
                sx={{ opacity: open ? 1 : 0 }}
              ></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, overflowX: "auto", width: "100%" }}
      >
        <DrawerHeader />
        {itemComponents[selectedContentIndex]}
      </Box>
    </Box>
  );
}
