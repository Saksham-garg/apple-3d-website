import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";

type Props = {};

const Hero = (props: Props) => {
  const [srcVideo, setSrcVideo] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setSrcVideo(smallHeroVideo);
    } else {
      setSrcVideo(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#ctn", {
      opacity: 1,
      delay: 2,
      y: -50,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={srcVideo}
          >
            <source src={srcVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        className="flex flex-col items-center opacity-0 translate-y-20"
        id="ctn"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
