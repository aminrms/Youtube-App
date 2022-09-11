import React from "react";

// Material-UI
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import "../Styles/VideoCardStyle.css";
// Material-Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import moment from "moment";
import { Box } from "@mui/material";
const VideoCard = ({ item, flexDirection }) => {
  return (
    <Link
      to={item?.id?.videoId ? `/video/${item?.id?.videoId}` : null}
      style={{ color: "#333", textDecoration: "none", width: "100%" }}
    >
      {flexDirection ? (
        <div
          sx={{ maxWidth: 345 }}
          className={flexDirection ? "card row" : "card"}
        >
          <Box className="img-box">
            <CardMedia
              component="img"
              height="180"
              image={item.snippet.thumbnails.high.url}
              alt={item.snippet.title}
              sx={{
                objectFit: "cover",
              }}
            />
          </Box>
          <CardContent className="card-content">
            <Link
              to={item?.id?.videoId ? `/video/${item?.id?.videoId}` : "null"}
              style={{ color: "#333", textDecoration: "none" }}
            >
              <Typography
                variant="subtitle1"
                color="textSecondary"
                fontWeight="medium"
                component={"h6"}
                sx={{ display: "-webkit-box" , fontSize: {xs:'13px' , sm:'14.5px' , md:'16px'}}}
              >
                {item?.snippet?.title}
              </Typography>
            </Link>
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
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  width: "100%",
                  height: "100%",
                  fontSize: {xs:'13px' , sm:'14.5px' , md:'16px'},
                  mb: 1.5,
                }}
              >
                {item?.snippet?.channelTitle}
                <CheckCircleIcon sx={{ fontSize: "11px", color: "#666" }} />
              </Typography>
            </Link>
            <Typography
              fontWeight="medium"
              variant="subtitle2"
              color="textSecondary"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                height: "100%",
                fontSize: "11px",
              }}
            >
              {moment(item?.snippet?.publishedAt).startOf("month").fromNow()}
            </Typography>
          </CardContent>
        </div>
      ) : (
        <Card
          sx={{ maxWidth: 345 }}
          className={flexDirection ? "card row" : "card"}
        >
          <Box className="img-box">
            <CardMedia
              component="img"
              height="190"
              image={item.snippet.thumbnails.high.url}
              alt={item.snippet.title}
              sx={{
                objectFit: "cover",
              }}
            />
          </Box>
          <CardContent className="card-content">
            <Link
              to={item?.id?.videoId ? `/video/${item?.id?.videoId}` : "null"}
              style={{ color: "#333", textDecoration: "none" }}
            >
              <Typography
                variant="subtitle1"
                color="textSecondary"
                fontWeight="medium"
                component={"h6"}
                sx={{ display: "-webkit-box" }}
              >
                {item?.snippet?.title}
              </Typography>
            </Link>
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
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  width: "100%",
                  height: "100%",
                  fontSize: "13px",
                  mb: 1.5,
                }}
              >
                {item?.snippet?.channelTitle}
                <CheckCircleIcon sx={{ fontSize: "11px", color: "#666" }} />
              </Typography>
            </Link>
            <Typography
              fontWeight="medium"
              variant="subtitle2"
              color="textSecondary"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                height: "100%",
                fontSize: "11px",
              }}
            >
              {moment(item?.snippet?.publishedAt).startOf("month").fromNow()}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Link>
  );
};

export default VideoCard;
