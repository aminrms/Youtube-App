import React, { useState } from "react";
// Materia-UI
import { Box, Avatar, Typography, Toolbar, IconButton } from "@mui/material";
// Material-UI-Icons
import MenuIcon from "@mui/icons-material/Menu";
// Logo
import { logo } from "../utils/constants";
// React-router-dom
import { Link } from "react-router-dom";
// components
import Sidebar from "./Sidebar";
import SearchBox from "./SearchBox";
// Css
import "../Styles/NavbarStyle.css";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(true);
  };
  const closeHandler = () => {
    setMenu(false);
  };
  return (
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 98,
        backgroundColor: "#fff",
        borderBottom: "1px solid #ddd",
        position: { xs: "relative", md: "sticky" },
        top: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
        className="left-box"
      >
        <Box
          sx={{
            width: menu ? "100%" : "fit-content",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: menu ? "30px" : "fit-content",
            backgroundColor: "#fff",
            borderRadius: "50%",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <IconButton onClick={menuHandler}>
            <MenuIcon sx={{ cursor: "pointer" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            ml: 1,
          }}
          className="navbar-logo"
        >
          <Link
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              textDecoration: "none",
              color: "#222",
            }}
            to="/"
          >
            <Avatar src={logo} alt="logo" />
            <Typography
              fontWeight="bold"
              variant="subtitle1"
              component={"h6"}
              fontSize="20px"
            >
              Youtube
            </Typography>
          </Link>
        </Box>
        <Box>
          <Sidebar closeHandler={closeHandler} menu={menu} setMenu={setMenu} />
        </Box>
      </Box>
      <SearchBox />
    </Toolbar>
  );
};

export default Navbar;
