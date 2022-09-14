import React, { useState, useEffect } from "react";

import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import ReactPlayer from "react-player";

import { fetchAPI } from "../utils/fetchData";

import "../Styles/VideoBoxStyle.css";
import CommentsBox from "./CommentsBox";
import moment from "moment";
import millify from "millify";

import SwipeableEdgeDrawer from "./CommentBoxMobile";

import DescriptionMobile from './DescriptionMobile'
import { Link } from "react-router-dom";
const VideoBox = ({ id }) => {
  const [videoDetail, setVideoDetail] = useState({});
  const [comments, setComments] = useState([]);
  const [channelDetails, setChannelDetails] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setVideoDetail(
        await fetchAPI("", "snippet,statistics", "videos", id, "")
      );
    };
    const fetchApi2 = async () => {
      setComments(
        await fetchAPI("", "snippet", "commentThreads", "", "", "", "", id)
      );
    };
    const fetchApi3 = async () => {
      setChannelDetails(
        await fetchAPI(
          "",
          "snippet",
          "channels",
          videoDetail?.items ? videoDetail?.items[0]?.snippet?.channelId : "",
          "",
          "",
          "",
          ""
        )
      );
    };
    fetchApi();
    fetchApi2();
    fetchApi3();
  }, [id]);
  console.log();
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ width: "100%" }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          width="100%"
          style={{ margin: "0 auto" }}
          controls
        />
        <Box sx={{ py: 1, mb: 1, borderBottom: "1px solid #ddd" }}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            sx={{
              mt: 1,
              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "16px",
              },
            }}
            fontWeight="medium"
          >
            {videoDetail?.items ? (
              videoDetail?.items[0].snippet?.title
            ) : (
              <Skeleton variant="text" width="200px" height={"20px"} />
            )}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0.8rem",
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={"medium"}
              sx={{
                mt: 0.5,
                fontSize: {
                  xs: "13px",
                  sm: "14.5px",
                  md: "16px",
                },
              }}
              color="textSecondary"
            >
              {videoDetail?.items ? (
                parseInt(
                  videoDetail?.items[0]?.statistics?.viewCount
                ).toLocaleString()
              ) : (
                <Skeleton variant="text" width="100px" height={"20px"} />
              )}
              views
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={"medium"}
              sx={{
                mt: 0.5,
                fontSize: {
                  xs: "13px",
                  sm: "14.5px",
                  md: "16px",
                },
              }}
              color="textSecondary"
            >
              {videoDetail?.items ? (
                parseInt(
                  videoDetail?.items[0]?.statistics?.likeCount
                ).toLocaleString()
              ) : (
                <Skeleton variant="text" width="100px" height={"20px"} />
              )}
              likes
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={"medium"}
              sx={{
                mt: 0.5,
                fontSize: {
                  xs: "13px",
                  sm: "14.5px",
                  md: "16px",
                },
              }}
              color="textSecondary"
            >
              {videoDetail?.items ? (
                moment(videoDetail.items[0]?.snippet?.publishedAt)
                  .startOf("month")
                  .fromNow()
              ) : (
                <Skeleton variant="text" width="100px" height={"20px"} />
              )}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ borderBottom: "1px solid #ddd", py: 1 }}>
          <Typography
            variant="subtitle1"
            fontWeight="medium"
            color="textPrimary"
            sx={{ display: "flex", alignItems: "center", gap: "1rem", mb: 1.5 }}
          >
            <Avatar
              src={
                channelDetails?.items
                  ? channelDetails?.items[0]?.snippet?.thumbnails?.high?.url
                  : "null"
              }
              alt="logo"
              sx={{
                width: { xs: "40px", md: "60px" },
                height: { xs: "40px", md: "60px" },
              }}
            />
            {videoDetail?.items ? (
              <Box>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  to={`/channel/${videoDetail?.items[0]?.snippet?.channelId}`}
                >
                  {videoDetail?.items[0].snippet?.channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "11px", color: "#666" }} />
                </Link>
                <Typography
                  variant="subtitle2"
                  fontWeight={"medium"}
                  sx={{
                    mt: 0.5,
                    fontSize: {
                      xs: "13px",
                      sm: "14.5px",
                      md: "16px",
                    },
                  }}
                  color="textSecondary"
                >
                  {channelDetails?.items ? (
                    millify(
                      channelDetails?.items[0]?.statistics?.subscriberCount
                    )
                  ) : (
                    <Skeleton variant="text" width="100px" height={"20px"} />
                  )}
                  <span style={{ marginLeft: "0.2rem" }}>subscribes</span>
                </Typography>
              </Box>
            ) : (
              <Skeleton variant="text" width="35%" height={"20px"} />
            )}
          </Typography>

          <Typography
            variant="body1"
            color="textPrimary"
            sx={{ display: { xs: "none", md: "-webkit-box" } }}
          >
            {videoDetail?.items ? (
              videoDetail?.items[0].snippet?.localized?.description.slice(
                0,
                videoDetail?.items[0].snippet?.localized?.description.length - 1
              )
            ) : (
              <Skeleton variant="text" width="80%" height={"100%"} />
            )}
          </Typography>
          <DescriptionMobile
            description={
              videoDetail?.items
                ? videoDetail?.items[0].snippet?.localized?.description
                : ""
            }
          />
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <CommentsBox comments={comments} />
        <SwipeableEdgeDrawer
          comments={comments}
          commentsCount={
            videoDetail?.items
              ? videoDetail?.items[0]?.statistics?.commentCount
              : null
          }
        />
      </Box>
    </Box>
  );
};

export default VideoBox;
