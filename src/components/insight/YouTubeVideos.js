import React from "react";

import { YouTubeEmbed } from "react-social-media-embed";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function YouTubeVideos() {
  const breakpoints = {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };

  const videoList = [
    "https://www.youtube.com/watch?v=hcn15CWrutM",
    "https://www.youtube.com/watch?v=M9Kr4xo0Gf4",
    "https://www.youtube.com/watch?v=rA81vjAWdio",
    "https://www.youtube.com/watch?v=qWBiDTRklUk",
  ];

  return (
    <div className="YoutubeVideos mt-[60px]" style={{ position: "relative" }}>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        loop={false}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {videoList?.map((video, index) => (
          <SwiperSlide key={index}>
            <YouTubeEmbed url={video} width={350} height={220} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default YouTubeVideos;
