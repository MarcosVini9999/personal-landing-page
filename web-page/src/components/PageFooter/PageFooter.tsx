import React from "react";
import { FooterContainer, SociaMedias } from "./PageFooter.style";
import emailIcon from "assets/svg/emailIcon.svg";
import githubIcon from "assets/svg/githubIcon.svg";
import linkedinIcon from "assets/svg/linkedinIcon.svg";

export const PageFooter: React.FC = () => {
  return (
    <FooterContainer>
      <h2>
        Developed by{" "}
        <a
          href="https://github.com/MarcosVini9999"
          target="_blank"
          rel="noreferrer"
        >
          Marcos Vinicius
        </a>
      </h2>

      <SociaMedias>
        <a href="mailto:marcosviniciusandradedesousa@hotmail.com">
          <img src={emailIcon} alt="" />
        </a>
        <a
          href="https://github.com/MarcosVini9999"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/marcosvinciusandradedesousa/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="" />
        </a>
      </SociaMedias>
    </FooterContainer>
  );
};
