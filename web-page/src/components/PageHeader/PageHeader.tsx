import React from "react";
import { HeaderContainer } from "./PageHeader.style";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const PageHeader: React.FC = () => {
  return (
    <HeaderContainer id="header">
      <h1>Page Header</h1>
      <a href="/#home">Home</a>
      <a href="/#experiences">Experiences</a>
      <a href="/#skills">Skills</a>
      <a href="/#activity">Activity</a>
      <a href="https://github.com/MarcosVini9999" target="_blank">
        Projects
      </a>
    </HeaderContainer>
  );
};
