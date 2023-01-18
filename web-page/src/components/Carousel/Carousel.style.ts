import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const CarouselContainer = styled(Box)({
  "& .carousel": {
    cursor: "grab",
    overflow: "hidden",
  },
  "& .inner": {
    display: "flex",
  },
  "& .item": {
    minWidth: "375px",
    minHeight: "200px",
    padding: "14px",
    "& img": {
      width: "100%",
      height: "90%",
      borderRadius: "12px",
      pointerEvents: "none",
    },
  },
});
