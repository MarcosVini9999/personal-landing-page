import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const FooterContainer = styled("footer")({
  bottom: "0",
  position: "relative",
  backgroundColor: "rgba(138, 47, 46, 1)",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "row",
  paddingBlock: "40px",
  "& a": {
    color: "inherit",
  },
  "& a:hover": {
    color: "#f7bb75",
  },
});

export const SociaMedias = styled(Box)({
  display: "flex",
  "& img": {
    width: "50px",
  },
  "& a": {
    display: "flex",
    marginInline: "10px",
  },
});
