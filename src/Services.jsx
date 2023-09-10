import React from "react";
import Title from "./Title";
import { services } from "./Data";
const Services = () => {
  return (
    <div className="body">
      <section className="section services" id="services">
        <div className="section-title">
          <h2>
            <Title title="our" subTitle="services" />
          </h2>
        </div>
        <div className="section-center services-center">
          {services.map((srv) => {
            const { id, icon, heading, text } = srv;
            return (
              <article className="service" key={id}>
                <span className="service-icon">{icon}</span>
                <div className="service-info">
                  <h4 className="service-title">{heading}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
