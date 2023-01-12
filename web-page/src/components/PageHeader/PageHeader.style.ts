import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const HeaderContainer = styled("header")({
  top: "0",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& a": {
    color: "inherit",
    textDecoration: "none",
  },
  "& .logo": {
    fontSize: "75px",
    marginInline: "30px",
    backgroundColor: "#8a2f2e",
    paddingInline: "5px",
  },
});

export const NavigationBar = styled(Box)({
  display: "flex",
  "& a": {
    marginInline: "30px",
  },
});
