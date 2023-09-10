import React from "react";
import AboutImg from "./ImgSvg/about.jpeg";
import Title from "./Title";
import { about } from "./Data";
const About = () => {
  return (
    <div className="body">
      <section className="section" id="about">
        <Title title="about" subTitle="us" />
        <div className="section-center about-center">
          <article className="about-img">
            <img src={AboutImg} alt="" className="about-photo" />
          </article>
          <article className="about-info">
            {about.map((abt) => {
              return (
                <div key={abt.id}>
                  <h3>{abt.text1}</h3>
                  <p>{abt.text2}</p>
                  <a href={abt.href} className="btn">
                    read more
                  </a>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
