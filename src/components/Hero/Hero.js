import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";

const handleClickFiverr = () => {
  window.open(FiverUrl, "_blank");
};
const handleClickUpwork = () => {
  window.open(UpworkUrl, "_blank");
};
const handleClickResume = () => {
  window.open(ResumeUrl, "_blank");
};

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Rafael Cruz
        </SectionTitle>
        <SectionText>
          I am a dedicated software engineer with a strong foundation in
          Frontend development and PHP Laravel. My journey in programming began
          in grade school, fueling a lifelong passion for technology. Throughout
          my career, I've partnered with diverse organizations, ranging from
          innovative startups to established corporations. This extensive
          experience has equipped me with comprehensive knowledge of the web
          development process, from conceptualization and architecture to
          deployment and maintenance.
        </SectionText>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "0 0 80px",
          }}
        >
          {/* <Button alt="upwork" onClick={handleClickUpwork}>
            Upwork
          </Button>
          <Button alt="fiverr" onClick={handleClickFiverr}>
            Fiverr
          </Button> */}
          {/* <Button alt="resume" onClick={handleClickResume}>
            Resume
          </Button> */}
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
