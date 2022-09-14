import React, { useState, useEffect } from "react";

import VideoCard from "./VideoCard";

import {  Box, Container, Skeleton } from "@mui/material";
import { fetchAPI } from "../utils/fetchData";

const SuggestedVideosBox = ({ id }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setVideos(await fetchAPI("", "snippet", "search", "", "", id, "video"));
    };
    fetchApi();
  }, [id]);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: " 1fr",
          lg: "1fr",
        },
        gap:'0.5rem',
        justifyItems: "center",
        mt: 1.5,
      }}
    >
      {videos.items
        ? videos.items.map((item, idx) => {
            return (
              <>
                {item.snippet
                  ? item.id.videoId && <VideoCard flexMobile={true} item={item} key={idx} />
                  : ""}
              </>
            );
          })
        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <Container key={index} maxWidth="xl">
                <Skeleton
                  variant="rounded"
                  width="360px"
                  sx={{ mb: 1 }}
                  height={"180px"}
                />
                <Skeleton
                  variant="text"
                  width="360px"
                  sx={{ mb: 1 }}
                  height={"15px"}
                />
                <Skeleton
                  sx={{ mb: 1 }}
                  variant="text"
                  width="60px"
                  height={"15px"}
                />
              </Container>
            );
          })}
    </Box>
  );
};

export default SuggestedVideosBox;
