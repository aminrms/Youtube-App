import React, { useState , useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Paper , Box , Typography } from "@mui/material";
import { SearchBoxContextProvider } from "../Context/SearchBoxContext";
const SearchBoxMobile = ( ) => {
  const [searchTerm, setSearchTerm] = useState("");
  const {search , setSearch} = useContext(SearchBoxContextProvider)
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");;
    setSearch(false)
  };
  console.log();
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        display: { xs: search ? "block" : "none", md: "none" },
      }}
    >
      <Box
        onClick={() => setSearch(false)}
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          backgroundColor: "rgb(0,0,0,0.45)",
          opacity: "0.8",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          width: "100%",
        }}
      >
        <Paper
          onSubmit={submitHandler}
          className="search-box"
          component={"form"}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#eee",
            p: 0.5,
            pl: 0.8,
            pr: 0.8,
            margin: "0 auto",
            width: "95%",
            boxShadow: "none",
          }}
        >
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem 0.8rem",
              outline: "none",
              border: "none",
              backgroundColor: "inherit",
              fontSize: "14px",
            }}
            type="text"
            placeholder="Search..."
          />
          <SearchIcon />
        </Paper>{" "}
      </Box>
    </Box>
  );
};

export default SearchBoxMobile;
