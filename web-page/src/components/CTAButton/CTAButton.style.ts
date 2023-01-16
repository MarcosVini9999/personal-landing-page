import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const CTAButtonContainer = styled(Box)({
  "& .CTAButton": {
    border: "none",
    cursor: "pointer",

    fontWeight: "700",
    fontSize: "15px",
    borderRadius: "10px",
    paddingInline: "20px",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    backgroundImage: "linear-gradient(to right, #f7bb75, #83764c)",
  },
});
