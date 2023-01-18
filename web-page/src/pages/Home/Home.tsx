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
import { MediaCard } from "components/MediaCard/MediaCard";
import { Carousel } from "components/Carousel/Carousel";

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
        <dl className="experiences">
          <h1>Experiences</h1>
          <dt>Title</dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            perferendis voluptate, iusto, voluptas nam nihil corporis laborum
            cum facere libero distinctio laboriosam. Dolores sequi officia
            quisquam distinctio. Doloremque, facere tempore.
          </dd>
          <dt>Title</dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            perferendis voluptate, iusto, voluptas nam nihil corporis laborum
            cum facere libero distinctio laboriosam. Dolores sequi officia
            quisquam distinctio. Doloremque, facere tempore.
          </dd>
          <dt>Title</dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            perferendis voluptate, iusto, voluptas nam nihil corporis laborum
            cum facere libero distinctio laboriosam. Dolores sequi officia
            quisquam distinctio. Doloremque, facere tempore.
          </dd>
          <dt>Title</dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            perferendis voluptate, iusto, voluptas nam nihil corporis laborum
            cum facere libero distinctio laboriosam. Dolores sequi officia
            quisquam distinctio. Doloremque, facere tempore.
          </dd>
          <dt>Title</dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            perferendis voluptate, iusto, voluptas nam nihil corporis laborum
            cum facere libero distinctio laboriosam. Dolores sequi officia
            quisquam distinctio. Doloremque, facere tempore.
          </dd>
        </dl>
      </ExperienceWrapper>

      <SkillsWrapper id="skills">
        <h1>Skills</h1>
        <div id="skillsContainer">
          <MediaCard
            image={sample}
            title={"Title"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ut amet ab laudantium iste natus! Quia quaerat maiores provident non quam quo eius illo, maxime ipsa laboriosam natus a eveniet!"
            }
          />
          <MediaCard
            image={sample}
            title={"Title"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ut amet ab laudantium iste natus! Quia quaerat maiores provident non quam quo eius illo, maxime ipsa laboriosam natus a eveniet!"
            }
          />
          <MediaCard
            image={sample}
            title={"Title"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ut amet ab laudantium iste natus! Quia quaerat maiores provident non quam quo eius illo, maxime ipsa laboriosam natus a eveniet!"
            }
          />
          <MediaCard
            image={sample}
            title={"Title"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ut amet ab laudantium iste natus! Quia quaerat maiores provident non quam quo eius illo, maxime ipsa laboriosam natus a eveniet!"
            }
          />
          <MediaCard
            image={sample}
            title={"Title"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ut amet ab laudantium iste natus! Quia quaerat maiores provident non quam quo eius illo, maxime ipsa laboriosam natus a eveniet!"
            }
          />
          <MediaCard
            image={sample}
            title={"Title"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ut amet ab laudantium iste natus! Quia quaerat maiores provident non quam quo eius illo, maxime ipsa laboriosam natus a eveniet!"
            }
          />
        </div>
      </SkillsWrapper>

      <ActivityWrapper id="activity">
        <h1>Activity</h1>
        <Carousel items={[sample, sample, sample, sample, sample]} />
      </ActivityWrapper>

      <BackToTopButton />
    </HomeContainer>
  );
};
