import React from "react";

import { Box, Typography, Avatar, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";

import "../Styles/VideoCardStyle.css";
const CommentsBox = ({ comments }) => {
  return (
    <>
      {comments?.items
        ? comments.items.map((item , index) => {
            return (
              <Box key={index}>
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
                    to={
                      item?.snippet?.topLevelComment?.snippet?.authorChannelId
                        ?.value
                    }
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <Avatar
                      src={
                        item?.snippet?.topLevelComment?.snippet
                          ?.authorProfileImageUrl
                      }
                      alt={
                        item?.snippet?.topLevelComment?.snippet
                          ?.authorDisplayName
                      }
                      width="50px"
                      height="50px"
                    />
                  </Link>
                  <Box>
                    <Link
                      to={
                        item?.snippet?.topLevelComment?.snippet?.authorChannelId
                          ?.value
                      }
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
                        {
                          item?.snippet?.topLevelComment?.snippet
                            ?.authorDisplayName
                        }
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        fontWeight="medium"
                      >
                        {moment(
                          item?.snippet?.topLevelComment?.snippet?.publishedAt
                        )
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
                      {item?.snippet?.topLevelComment?.snippet?.textOriginal.slice(0,50)}...
                    </Typography>
                    <Typography
                      fontWeight="medium"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item?.snippet?.topLevelComment?.snippet?.likeCount}
                      <span style={{ marginLeft: "0.3rem" }}>likes</span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })
        : [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21,
          ].map((item, indx) => {
            return (
              <Skeleton
                sx={{ mb: 1 }}
                variant="rounded"
                width="90%"
                height="60px"
              />
            );
          })}
    </>
  );
};

export default CommentsBox;
