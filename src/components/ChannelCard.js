import React from "react";
// Material-UI
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
// Material-Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
const ChannelCard = ({ item }) => {
  return (
    <Link
      to={item?.id?.channelId ? `/channel/${item?.id?.channelId}` : '#'}
      style={{ color: "#333", textDecoration: "none" }}
    >
      <Card sx={{ maxWidth: 345, p: 1 }} className="channelCard">
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
              width: { xs: "80px", sm: "110px", md: "150px" },
              height: { xs: "80px", sm: "110px", md: "150px" },
            }}
          />
        </Box>

        <CardContent>
          <Link
            to={
              item?.snippet?.channelId
                ? `/channel/${item?.snippet?.channelId}`
                : null
            }
            style={{
              color: "#333",
              textDecoration: "none",
            }}
          >
            <Typography
              fontWeight="medium"
              variant="subtitle2"
              color="textSecondary"
              sx={{
                gap: "1rem",
                width: "100%",
                height: "100%",
                fontSize: "16px",
                mb: 1.5,
                display: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item?.snippet?.channelTitle}
              <CheckCircleIcon sx={{ fontSize: "14px", color: "#666" }} />
            </Typography>
          </Link>

          {item?.statistics?.subscriberCount && (
            <Typography
              fontWeight="medium"
              variant="subtitle2"
              color="textSecondary"
              sx={{
                gap: "1rem",
                width: "100%",
                height: "100%",
                fontSize: "12px",
                mb: 1.5,
                display: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item?.statistics?.subscriberCount}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ChannelCard;
