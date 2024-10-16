import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";

type Props = {};

const VideoCarousel = (props: Props) => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isPlaying: false,
    startPlay: false,
    isEnd: false,
    isLastVideo: false,
    videoId: false,
  });

  const { isEnd, startPlay, isLastVideo, isPlaying, videoId } = video;

  useEffect(() => {}, [videoId, startPlay]);
  return (
    <div className="flex items-center">
      {hightlightsSlides.map((list, i) => (
        <div className="sm:pr-20 pr-10" key={list.id}>
          <div className="video-carousel_container">
            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
              <video playsInline={true} id="video" preload="auto" muted>
                <source src={list.video} type="video/mp4"></source>
              </video>
            </div>
            <div className="absolute top-12 left-[5%] z-[10]">
              {list.textLists.map((text) => (
                <p key={text} className="md:text-2xl text-xl font-medium">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;
