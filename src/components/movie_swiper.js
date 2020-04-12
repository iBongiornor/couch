import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";

const MSwiper = (props) => {
  const sroot = useRef(null);

  useEffect(() => {
    // Trigger your effect
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 70,
        stretch: 10,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });

    swiper.on("slideChange", () => {
      props.shuffle(swiper.realIndex);
    });
  }, []);

  return (
    <div ref={sroot} class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          style="background-image:url(/assets/p711283071.jpg)"
        ></div>
        <div
          class="swiper-slide"
          style="background-image:url(/assets/p457760035.jpg)"
        ></div>
        <div
          class="swiper-slide"
          style="background-image:url(/assets/p939847791.jpg)"
        ></div>
        <div
          class="swiper-slide"
          style="background-image:url(/assets/p456703618.jpg)"
        ></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  );
};

export default MSwiper;
