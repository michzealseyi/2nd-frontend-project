import React from "react";
import Title from "./Title";
import { tours } from "./Data";
const Tours = () => {
  return (
    <div className="body">
      <section className="section" id="featured">
        <div className="section-title">
          <h2>
            <Title title="featured" subTitle="tours" />
          </h2>
        </div>
        <div className="section-center featured-center">
          {tours.map((tour) => {
            const {
              id,
              image,
              date,
              location,
              days,
              text,
              icon,
              country,
              price,
            } = tour;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} alt="" className="tour-img" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{location}</h4>
                    <p>{days}</p>
                  </div>
                  <p>{text}</p>
                  <div className="tour-footer">
                    <p>
                      <span className="tour-icon">
                        {icon} {country}
                      </span>
                    </p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="tour-btn">
          <a href="#home" className="btn">
            all tours
          </a>
        </div>
      </section>
    </div>
  );
};

export default Tours;
