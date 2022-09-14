import React, { useContext } from "react";

// Materia-UI

import { Stack, Box, Typography, IconButton, Avatar } from "@mui/material";
import { categories, logo } from "../utils/constants";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import { SelectedCategoryContextProvider } from "../Context/SelectCategoryContext";
const Sidebar = ({ menu, setMenu, closeHandler }) => {
  const { selectedCategory, setSelectedCategory } = useContext(
    SelectedCategoryContextProvider
  );

  return (
    <>
      <Box
        onClick={() => setMenu(false)}
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          backgroundColor: "rgb(0,0,0,0.45)",
          opacity: "0.8",
          display: menu ? "block" : "none",
        }}
      ></Box>
      <Stack
        className={menu ? "sidebar show" : "sidebar"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          p: 0,
        }}
      >
        <Box
          className="first-box"
          sx={{
            width: "100%",
            height: "1%",
            display: "flex",
            // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton onClick={closeHandler} sx={{ px: 1 }}>
            <MenuIcon sx={{ cursor: "pointer" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
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
                width: "100%",
              }}
              to="/"
            >
              <Avatar
                sx={{ width: "35px", height: "35px" }}
                src={logo}
                alt="logo"
              />
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
        </Box>
        <Box
          className="second-box"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            px: 1,
            width: "100%",
            height: "fit-content",
            listStyle: "none",
          }}
        >
          {categories.map((category, idx) => {
            return (
              <li onClick={() => setMenu(false)} key={idx}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {" "}
                  <span
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                      backgroundColor:
                        selectedCategory === category.name ? "#eee" : "#fff",
                    }}
                  >
                    {category.icon}
                    <Typography
                      variant="subtitle2"
                      component="h6"
                      fontWeight="medium"
                    >
                      {category.name}
                    </Typography>
                  </span>
                </Link>
              </li>
            );
          })}
        </Box>
      </Stack>
    </>
  );
};

export default Sidebar;
