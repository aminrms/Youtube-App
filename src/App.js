import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  Feed,
  ChannelDetails,
  VideoDetails,
  SearchFeed,
} from "./components";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
      <Footer/>
    </Box>
  );
};

export default App;
