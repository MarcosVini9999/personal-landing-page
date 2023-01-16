import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const HomeContainer = styled(Box)({});

export const HomeWrapper = styled(Box)({
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

export const ExperienceWrapper = styled(Box)({
  height: "100vh",
});

export const SkillsWrapper = styled(Box)({
  height: "100vh",
});

export const ActivityWrapper = styled(Box)({
  height: "100vh",
});
