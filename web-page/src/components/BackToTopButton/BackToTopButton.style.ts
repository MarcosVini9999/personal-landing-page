import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const BackToTopButtonContainer = styled(Box)({
  position: "fixed",
  bottom: "5px",
  right: "5px",
  zIndex: "10",

  "&.HiddenbackToTopButton": {
    display: "none",
  },
});
