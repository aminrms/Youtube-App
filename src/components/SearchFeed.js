import React, { useState, useEffect } from "react";

import { Container, Box, Skeleton, Card } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchData";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    const fetchApi = async () => {
      setVideos(await fetchAPI(searchTerm, "snippet", "search"));
    };
    fetchApi();
  }, [searchTerm]);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        {videos.items
          ? videos.items.map((item, idx) => {
              return (
                <>
                  {item.id.videoId && (
                    <VideoCard flexDirection="row" item={item} key={idx} />
                  )}
                  {item.id.channelId && (
                    <ChannelCard flexDirection="row" item={item} key={idx} />
                  )}
                </>
              );
            })
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <Card
                  key={item}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    boxShadow: "none",
                  }}
                >
                  <Skeleton
                    variant="rounded"
                    width="360px"
                    sx={{ mb: 1 }}
                    height={"180px"}
                  />
                  <Box>
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
                  </Box>
                </Card>
              );
            })}
      </Box>
    </Container>
  );
};

export default SearchFeed;
