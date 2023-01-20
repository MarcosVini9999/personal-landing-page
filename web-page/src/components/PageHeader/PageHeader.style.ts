import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const HeaderContainer = styled("header")({
  backgroundColor: "#ae5543",
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
  "& #btn-mobile": {
    display: "none",
  },
  "& #menu": {
    display: "flex",
    listStyle: "none",
    margin: "0px",
    "& a": {
      display: "block",
      padding: "10px",
      marginInline: "30px",
    },
    "& a:hover": {
      backgroundColor: "rgba(0, 0, 0, .05)",
    },
  },
  "@media (max-width: 900px)": {
    "& #btn-mobile": {
      display: "flex",
    },
    "& #menu": {
      display: "none",
      position: "absolute",
      width: "100%",
      top: "86px",
      right: "0px",
      backgroundColor: "#8a2f2e",
      height: "calc(100vh - 86px)",
      zIndex: "1000",
    },
    "& .active": {
      display: "block !important",
    },
  },
});
