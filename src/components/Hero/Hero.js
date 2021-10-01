import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <h2>Jason M. Hoyt</h2>
        </SectionTitle>
        <SectionText>
          <img className="pro-img" src={"/images/0.jpeg"}></img>

          <img className="pro-pic" src={"/images/me.jpeg"}></img>
          <h3>Full Stack Web Developer</h3>
        </SectionText>

        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
