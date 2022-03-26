import React from "react";
import styled from "styled-components";

const Slider_Container = styled.div``;
const Slider = () => {
  return (
    <Slider_Container>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        style={{ height: "600px" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://quotefancy.com/media/wallpaper/3840x2160/4674042-Earl-Nightingale-Quote-Never-give-up-on-a-dream-just-because-of.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://aligntoday.com/wp-content/uploads/2019/09/Motivaional-Quotes-to-Inspire-Your-Team.png"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.quotesgram.com/img/34/1/785522070-Bruce-Lee-Practiced-Quotes-Wallpaper.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </Slider_Container>
  );
};

export default Slider;
