import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";
import moment from "moment";
import { Avatar } from "@mui/material";
import CommentComponent from "./CommentComponent";
const drawerBleeding = 56;

interface Props {
  window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const SwipeableEdgeDrawer = (props) => {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            overflow: "visible",
            zIndex:'1',
            height: `calc(50% - ${drawerBleeding}px)`,
          },
        }}
      />
      
        <Button
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textTransform: "unset",
            py:1,
          }}
          onClick={toggleDrawer(true)}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: "#555", fontSize: "12px" }}
          >
            {parseInt(props.commentsCount).toLocaleString()} comments
          </Typography>
          <CommentIcon sx={{ fontSize: "15px", color: "#333" }} />
        </Button>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography fontWeight='medium' sx={{ p: 2, color: "text.secondary" }}>
            Comments
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          {props.comments?.items
            ? props.comments.items.map((item, index) => {
                return <CommentComponent item={item} key={index} />;
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Skeleton variant={"circular"} width="30px" height="30px" />
                    <Box>
                      <Skeleton
                        variant={"rounded"}
                        width="100%"
                        height="30px"
                      />
                      <Skeleton variant={"rounded"} width="40%" height="20px" />
                    </Box>
                  </Box>
                );
              })}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default SwipeableEdgeDrawer;
