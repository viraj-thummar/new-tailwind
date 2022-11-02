import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function SocialPost() {
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

  const postList = [
    {
      title:
        "We Founder Circle (WFC) kicked off its #startup and #investor Mixer - Rajasthan in Udaipur with more than 70+ #investors from the city and 15 #startups making pitches to the audience. Out of 15 startups,",
      platform: "Linkedin",
      link: "https://www.linkedin.com/posts/gaurav-vk-singhvi_startup-investor-investors-activity-6972190016789721088-YCjW?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "What is the best entrepreneurship advice you’ve received?",
      platform: "Twitter",
      link: "https://twitter.com/GauravSinghvi14/status/1565941660004937728",
    },
    {
      title:
        "Events at Six Locations in one single day, We Founder Circle is covering the length and breadth of India, making sure we democratize the early stage investing in India.",
      platform: "Linkedin",
      link: "https://www.linkedin.com/posts/gaurav-vk-singhvi_startup-community-india-activity-6971826840705351680-iO9D?utm_source=share&utm_medium=member_desktop",
    },
    {
      title:
        "Last four months of 2022. That is 17 weeks, 122 days, and 2928 hours.",
      platform: "Twitter",
      link: "https://twitter.com/GauravSinghvi14/status/1565309136882896897",
    },
    {
      title:
        "We are excited to have partnered as lead sponsor & knowledge partner with two of the biggest startup & business event of India...",
      platform: "Linkedin",
      link: "https://www.linkedin.com/posts/gaurav-vk-singhvi_business-startups-funding-activity-6971420166374981632-KoTP?utm_source=share&utm_medium=member_desktop",
    },
    {
      title:
        "The real growth happens when you shift your focus from “I don’t have time as I am too busy” to “If I don’t do the right kind of activities I will always be busy”",
      platform: "Twitter",
      link: "https://twitter.com/GauravSinghvi14/status/1563496800664838144",
    },
  ];

  //   const postList = [
  //     "https://twitter.com/GauravSinghvi14/status/1565941660004937728",
  //     "https://twitter.com/GauravSinghvi14/status/1565609238688256000",
  //     "https://twitter.com/GauravSinghvi14/status/1565309136882896897",
  //     "https://twitter.com/GauravSinghvi14/status/1565300940848017410",
  //     "https://twitter.com/GauravSinghvi14/status/1563496800664838144",
  //   ];
  return (
    <div className="SocialPosts" style={{ position: "relative" }}>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        loop={false}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {postList?.map((post, index) => (
          <SwiperSlide key={index}>
            <a href={post.link} target="_blank" className="decoration-transparent">
              <div className="w-[100%] text-left mt-[60px]">
                <div className="">
                  <img
                    className="!h-[40px] !w-[auto]"
                    src={
                      post.platform === "Linkedin"
                        ? "./gsv_assets/social-icon/Linkedin.svg"
                        : "./gsv_assets/social-icon/Twitter.svg"
                    }
                    alt="socialIcon"
                  />
                </div>
                <div className="mt-[32px]">
                  <p className="font-normal text-[16px] leading-[150%] text-[#4d4d4d]">
                    {post.title.substr(0, 100)}
                  </p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SocialPost;
