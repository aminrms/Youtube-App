import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
const SearchBox = ({ zIndex  , width ,}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  };
  return (
    <Paper
      onSubmit={submitHandler}
      className="search-box"
      component={"form"}
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
        p: 0.5,
        pl: 0.8,
        pr: 0.8,
        width: width ? "100%" : "30%",
        boxShadow: "none",
        zIndex: zIndex ? "1" : "-1",
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
    </Paper>
  );
};

export default SearchBox;
