import React from "react";
import { CTAButtonContainer } from "./CTAButton.style";

interface CTAButtonProps {
  title: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ title }) => {
  return (
    <CTAButtonContainer>
      <button className="CTAButton">
        <p>{title}</p>
      </button>
    </CTAButtonContainer>
  );
};
