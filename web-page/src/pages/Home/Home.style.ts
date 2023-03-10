import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const HomeContainer = styled(Box)({
  "& section:nth-child(2n+1)": {
    backgroundColor: "rgba(31, 1, 1, 0.8)",
  },
  "& section:nth-child(2n)": {
    backgroundColor: "rgba(31, 1, 1, 0.7)",
  },
});

export const HomeWrapper = styled("section")({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingInline: "50px",
  height: "100vh",

  "& > div": {
    width: "50%",
  },

  "& > img": {
    minWidth: "50%",
  },
});

export const ExperienceWrapper = styled("section")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingInline: "50px",
  height: "100vh",
  "& h1": {
    marginTop: "0",
  },
});

export const SkillsWrapper = styled("section")({
  minHeight: "calc(100vh - 100px)",
  paddingBlock: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "& h1": {
    marginTop: "0",
  },
  "& #skillsContainer": {
    maxWidth: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(345px, 1fr))",
    gridGap: "1rem",
    justifyItems: "center",
  },
});

export const ActivityWrapper = styled("section")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "& h1": {
    marginTop: "0",
    marginInline: "auto",
  },
  height: "100vh",
});
