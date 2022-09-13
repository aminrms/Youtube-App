import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  Skeleton,
  Card,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchData";
import VideoCard from "./VideoCard";

const ChannelDetails = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [channelDetails, setChannelDetails] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setChannelDetails(await fetchAPI("", "snippet", "channels", id));
    };
    const fetchApi2 = async () => {
      setVideos(await fetchAPI("", "snippet,id", "search", id, "date"));
    };
    fetchApi();
    fetchApi2();
  }, [id]);
  console.log(channelDetails);
  return (
    <Container
      maxWidth="xl"
    >
      {channelDetails.items ? (
        <Box
          sx={{
            width: "100%",
            height: { xs: "150px", sm: "180px", md: "200px", lg: "320px" },
          }}
        >
          <img
            src={
              channelDetails?.items &&
              channelDetails?.items[0]?.brandingSettings?.image
                ?.bannerExternalUrl
            }
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="banner"
          />
        </Box>
      ) : (
        <Skeleton
          variant="rounded"
          width="100%"
          sx={{
            mb: 1,
            height: { xs: "150px", sm: "180px", md: "200px", lg: "320px" },
          }}
          height={"320px"}
        />
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        

      </Box>
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
          mt: 2,
        }}
      >
        {videos.items
          ? videos.items.map((item, idx) => {
              return (
                <Box key={idx}>
                  {item.id.videoId && <VideoCard item={item} />}
                </Box>
              );
            })
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <Card sx={{ boxShadow: "none" }} key={index}>
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

export default ChannelDetails;
