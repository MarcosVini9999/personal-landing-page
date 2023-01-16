import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const HomeContainer = styled(Box)({
  "& section:nth-child(2n+1)": {
    backgroundColor: "rgba(31, 1, 1, 1)",
  },
  "& section:nth-child(2n)": {
    backgroundColor: "rgba(31, 1, 1, 0.9)",
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
});

export const ExperienceWrapper = styled("section")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingInline: "50px",
  height: "100vh",
});

export const SkillsWrapper = styled("section")({
  height: "100vh",
});

export const ActivityWrapper = styled("section")({
  height: "100vh",
});
