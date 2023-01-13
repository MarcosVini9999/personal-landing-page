import React from "react";
import { BackToTopButtonContainer } from "./BackToTopButton.style";
import backToTopIcon from "assets/svg/backToTopIcon.svg";

export const BackToTopButton: React.FC = () => {
  const backToTopButton = document.getElementById("backToTopButton");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    console.log(scrollY);

    if (scrollY > 50) {
      backToTopButton?.classList.remove("HiddenbackToTopButton");
    } else {
      backToTopButton?.classList.add("HiddenbackToTopButton");
    }
  });

  return (
    <BackToTopButtonContainer
      id="backToTopButton"
      className="HiddenbackToTopButton"
    >
      <a href="#header">
        <img src={backToTopIcon} alt="Back to top button icon" />
      </a>
    </BackToTopButtonContainer>
  );
};
