import React, { useState, useEffect } from "react";
// Material-UI
import { Container, Skeleton, Box, Card } from "@mui/material";
// API
import { fetchAPI } from "../utils/fetchData";
import Sidebar from "./Sidebar";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Gaming");
  useEffect(() => {
    const fetchApi = async () => {
      setVideos(await fetchAPI(selectedCategory, "snippet", "search"));
    };
    fetchApi();
  }, [selectedCategory]);
  return (
    <Container maxWidth={"xl"}>
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr ",
          },
          gap: "0.5rem",
          width: "100%",
          height: "100%",
          margin: "0.5rem auto",
          justifyItems: "center",
        }}
      >
        {videos.items
          ? videos.items.map((item, idx) => {
              return (
                <Box key={idx}>
                  {item.id.videoId && <VideoCard item={item} />}
                  {item.id.channelId && <ChannelCard item={item} />}
                </Box>
              );
            })
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <Card sx={{ boxShadow: "none", margin: "0.5rem" }} key={index}>
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
                </Card>
              );
            })}
      </Box>
    </Container>
  );
};

export default Feed;
