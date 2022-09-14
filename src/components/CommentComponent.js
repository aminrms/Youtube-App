import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import {Link} from "react-router-dom";
import moment from "moment";
const CommentComponent = ({item}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        p: 1,
        py: 1.5,
      }}
    >
      <Link
        to={item?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}
        style={{ color: "white", textDecoration: "none" }}
      >
        <Avatar
          src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
          alt={item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          width="50px"
          height="50px"
        />
      </Link>
      <Box>
        <Link
          to={item?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}
          style={{
            color: "#555",
            textDecoration: "none",
            display: "flex",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <Typography
            variant="subtitle2"
            color="textPrimary"
            fontWeight="medium"
          >
            {item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            fontWeight="medium"
          >
            {moment(item?.snippet?.topLevelComment?.snippet?.publishedAt)
              .startOf("months")
              .fromNow()}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          fontWeight="medium"
          color="textPrimary"
          className="comment-text"
        >
          {item?.snippet?.topLevelComment?.snippet?.textOriginal.slice(0, 50)}
          ...
        </Typography>
        <Typography fontWeight="medium" variant="body2" color="textSecondary">
          {item?.snippet?.topLevelComment?.snippet?.likeCount}
          <span style={{ marginLeft: "0.3rem" }}>likes</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default CommentComponent;
