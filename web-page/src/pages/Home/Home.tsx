import { BackToTopButton } from "components";
import React from "react";
import {
  ActivityWrapper,
  ExperienceWrapper,
  HomeContainer,
  HomeWrapper,
  SkillsWrapper,
} from "./Home.style";
import sample from "assets/sample.webp";
import { CTAButton } from "components/CTAButton/CTAButton";

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeWrapper id="home">
        <div>
          <h1>Impactful Text!!!</h1>
          <h2>Subtext not so impactful</h2>
          <CTAButton title={"CONTACT"} />
        </div>

        <img src={sample} alt="sample" />
      </HomeWrapper>

      <ExperienceWrapper id="experiences">
        <h1>Experiences</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          recusandae consequuntur rerum odio, nobis nam quas odit sit eos saepe
          doloremque natus quibusdam error nulla perferendis impedit rem? Odio,
          omnis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempore recusandae consequuntur rerum odio, nobis nam quas odit sit
          eos saepe doloremque natus quibusdam error nulla perferendis impedit
          rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tempore recusandae consequuntur rerum odio, nobis nam quas odit
          sit eos saepe doloremque natus quibusdam error nulla perferendis
          impedit rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore recusandae consequuntur rerum odio, nobis
          nam quas odit sit eos saepe doloremque natus quibusdam error nulla
          perferendis impedit rem? Odio, omnis? impedit rem? Odio, omnis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae
          consequuntur rerum odio, nobis nam quas odit sit eos saepe doloremque
          natus quibusdam error nulla perferendis impedit rem? Odio, omnis?
          impedit rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore recusandae consequuntur rerum odio, nobis
          nam quas odit sit eos saepe doloremque natus quibusdam error nulla
          perferendis impedit rem? Odio, omnis? impedit rem? Odio, omnis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae
          consequuntur rerum odio, nobis nam quas odit sit eos saepe doloremque
          natus quibusdam error nulla perferendis impedit rem? Odio, omnis?
          impedit rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore recusandae consequuntur rerum odio, nobis
          nam quas odit sit eos saepe doloremque natus quibusdam error nulla
          perferendis impedit rem? Odio, omnis?
        </p>
      </ExperienceWrapper>

      <SkillsWrapper id="skills">
        <h1>Skills</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          recusandae consequuntur rerum odio, nobis nam quas odit sit eos saepe
          doloremque natus quibusdam error nulla perferendis impedit rem? Odio,
          omnis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempore recusandae consequuntur rerum odio, nobis nam quas odit sit
          eos saepe doloremque natus quibusdam error nulla perferendis impedit
          rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tempore recusandae consequuntur rerum odio, nobis nam quas odit
          sit eos saepe doloremque natus quibusdam error nulla perferendis
          impedit rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore recusandae consequuntur rerum odio, nobis
          nam quas odit sit eos saepe doloremque natus quibusdam error nulla
          perferendis impedit rem? Odio, omnis? impedit rem? Odio, omnis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae
          consequuntur rerum odio, nobis nam quas odit sit eos saepe doloremque
          natus quibusdam error nulla perferendis impedit rem? Odio, omnis?
          impedit rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore recusandae consequuntur rerum odio, nobis
          nam quas odit sit eos saepe doloremque natus quibusdam error nulla
          perferendis impedit rem? Odio, omnis? impedit rem? Odio, omnis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae
          consequuntur rerum odio, nobis nam quas odit sit eos saepe doloremque
          natus quibusdam error nulla perferendis impedit rem? Odio, omnis?
          impedit rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore recusandae consequuntur rerum odio, nobis
          nam quas odit sit eos saepe doloremque natus quibusdam error nulla
          perferendis impedit rem? Odio, omnis?
        </p>
      </SkillsWrapper>

      <ActivityWrapper id="activity">
        <h1>Activity</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          recusandae consequuntur rerum odio, nobis nam quas odit sit eos saepe
          doloremque natus quibusdam error nulla perferendis impedit rem? Odio,
          omnis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempore recusandae consequuntur rerum odio, nobis nam quas odit sit
          eos saepe doloremque natus quibusdam error nulla perferendis impedit
          rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tempore recusandae consequuntur rerum odio, nobis nam quas odit
          sit eos saepe doloremque natus quibusdam error nulla perferendis
          impedit rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore recusandae consequuntur rerum odio, nobis
          nam quas odit sit eos saepe doloremque natus quibusdam error nulla
          perferendis impedit rem? Odio, omnis? impedit rem? Odio, omnis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae
          consequuntur rerum odio, nobis nam quas odit sit eos saepe doloremque
          natus quibusdam error nulla perferendis impedit rem? Odio, omnis?
          impedit rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore recusandae consequuntur rerum odio, nobis
          nam quas odit sit eos saepe doloremque natus quibusdam error nulla
          perferendis impedit rem? Odio, omnis? impedit rem? Odio, omnis? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Tempore recusandae
          consequuntur rerum odio, nobis nam quas odit sit eos saepe doloremque
          natus quibusdam error nulla perferendis impedit rem? Odio, omnis?
          impedit rem? Odio, omnis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore recusandae consequuntur rerum odio, nobis
          nam quas odit sit eos saepe doloremque natus quibusdam error nulla
          perferendis impedit rem? Odio, omnis?
        </p>
      </ActivityWrapper>

      <BackToTopButton />
    </HomeContainer>
  );
};
