import React from "react";
import { HeaderContainer, NavigationBar } from "./PageHeader.style";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import menuButton from "assets/svg/menuButton.svg";

export const PageHeader: React.FC = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("menu");
    menu?.classList.toggle("active");
  };

  return (
    <HeaderContainer id="header">
      <Link to="/" className="logo">
        M
      </Link>
      <NavigationBar id="nav">
        <Button id="btn-mobile" onClick={toggleMenu}>
          <img src={menuButton} alt="menu" />
        </Button>
        <motion.ul id="menu">
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#experiences">Experiences</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#activity">Activity</a>
          </li>
          <li>
            <a
              href="https://github.com/MarcosVini9999"
              target="_blank"
              rel="noreferrer"
            >
              Projects
            </a>
          </li>
        </motion.ul>
      </NavigationBar>
    </HeaderContainer>
  );
};
