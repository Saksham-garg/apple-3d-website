import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

type Props = {};

const Highlights = (props: Props) => {
  useGSAP(() => {
    gsap.to("#title", {
      duration: 1,
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", {
      duration: 1,
      opacity: 1,
      y: 0,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen common-padding h-full bg-zinc overflow-hidden"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-center justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="items-end flex flex-wrap gap-5">
            <p className="link">
              Watch the film{" "}
              <img src={watchImg} alt="_watch" className="ml-2"></img>
            </p>
            <p className="link">
              Watch the event{" "}
              <img src={rightImg} alt="_right" className="ml-2"></img>
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
