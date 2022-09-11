import React from "react";

import { Container, Box, Typography } from "@mui/material";

import { useParams } from "react-router-dom";
import VideoBox from "./VideoBox";
import SuggestedVideosBox from "./SuggestedVideosBox";
const VideoDetails = () => {
  const { id } = useParams();

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr",
          md: "2fr 1fr",
          lg: "3fr 1fr",
        },
        justifyItems: "center",
        mt: 1.5,
      }}
    >
      <VideoBox id={id} />
      <SuggestedVideosBox id={id} />
    </Container>
  );
};

export default VideoDetails;
