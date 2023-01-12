import React from "react";
import { HeaderContainer, NavigationBar } from "./PageHeader.style";
import { Link } from "react-router-dom";

export const PageHeader: React.FC = () => {
  return (
    <HeaderContainer id="header">
      <Link to="/" className="logo">
        M
      </Link>
      <NavigationBar>
        <a href="/#home">Home</a>
        <a href="/#experiences">Experiences</a>
        <a href="/#skills">Skills</a>
        <a href="/#activity">Activity</a>
        <a href="https://github.com/MarcosVini9999" target="_blank">
          Projects
        </a>
      </NavigationBar>
    </HeaderContainer>
  );
};
