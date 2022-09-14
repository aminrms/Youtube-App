import React from "react";

import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
// Material-Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import millify from "millify";

const ChannelCardForDetails = ({ item }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        boxShadow: "none",
        ml: 1,
        height: "80px",
        p: 0.5,
        // background: 'red'
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          src={
            item?.snippet?.thumbnails?.medium?.url ||
            item?.snippet?.thumbnails?.default?.url ||
            item?.snippet?.thumbnails?.high?.url
          }
          alt="logo"
          sx={{
            width: { xs: "60px", sm: "90px", md: "100px" },
            height: { xs: "60px", sm: "90px", md: "100px" },
            position: "relative",
            bottom: "2.5rem",
          }}
        />
      </Box>

      <CardContent>
        <Typography
          fontWeight="medium"
          variant="subtitle2"
          color="textPrimary"
          sx={{
            gap: "1rem",
            width: "100%",
            height: "100%",
            fontSize: {
              xs: "13px",
              sm: "14.5px",
              md: "16px",
              lg: "18px",
              xl: "20px",
            },
            mb: 1.5,
            mt:1,
            display: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item?.snippet?.title}
          <CheckCircleIcon sx={{ fontSize: "14px", color: "#666" }} />
        </Typography>

        {item?.statistics?.subscriberCount && (
          <Typography
            fontWeight="medium"
            variant="subtitle2"
            color="textSecondary"
            sx={{
              gap: "1rem",
              width: "100%",
              height: "100%",
              fontSize: { xs: "11px", sm: "12px", md: "15px"},
              mb: 1.5,
              ml:1,
              display: "center",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {millify(item?.statistics?.subscriberCount)}
            <span style={{ marginLeft: "0.2rem" }}>subscribes</span>
          </Typography>
        )}
      </CardContent>
    </Box>
  );
};

export default ChannelCardForDetails;
