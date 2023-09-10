import React from "react";
import { pictures } from "./Data";

const Gallery = () => {
  return (
    <div className="body">
      <section id="gallery">
        <div className="gallery-center">
          {pictures.map((pics) => {
            const { id, image, href, icon } = pics;
            return (
              <article className="gallery-img-container" key={id}>
                <img src={image} alt="" className="gallery-img"></img>
                <a href={href} className="gallery-icon">
                  {icon}
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
