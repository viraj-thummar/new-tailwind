import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CommonNavbar from "../CommonNavbar";
import line from "../../images/line.png";
import Footer from "../Footer";
import YouTubeVideos from "./YouTubeVideos";

import SocialPost from "./SocialPost";
import { getPosts } from "../../actions/posts";
import BlogArticle from "./BlogArticle";

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);
  const firstBlogList = posts?.slice(0, 6);
  const secondBlogList = posts?.slice(3);

  const breakpoints = {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  };

  const breakpoints1 = {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };

  const slides = [1, 1, 1];

  const gallerImages = [
    "./gsv_assets/gallery/1.png",
    "./gsv_assets/gallery/2.png",
    "./gsv_assets/gallery/3.png",
    "./gsv_assets/gallery/4.png",
    "./gsv_assets/gallery/5.png",
    "./gsv_assets/gallery/6.png",
    "./gsv_assets/gallery/7.png",
    "./gsv_assets/gallery/8.png",
  ];

  return (
    <div className="insight_page">
      <Container>
        <CommonNavbar />
      </Container>
      <div className="h-[30vh] justify-end mt-[72px] flex flex-col overflow-hidden">
        <Container>
          <div className="w-[100%] md:w-[90%] lg:w-[70%] ">
            <h1 className="lg:text-[56px] md:text-[40px] text-[36px]">
              Latest Blogs, Articles & Posts
            </h1>
            {/* <p className="banner_desc extraSmallFont">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p> */}
          </div>
        </Container>
      </div>
      <Container>
        {firstBlogList ? <BlogArticle blogs={firstBlogList} /> : "loading"}
        <div className="md:h-10"></div>

        {/* {secondBlogList ? <BlogArticle blogs={secondBlogList} /> : "loading"} */}
        <div className="h-20"></div>

      </Container>
      {/* <div className="h-20"></div> */}
      <div className="bg-[#fefbf5]">
        <div className="h-20"></div>
        <Container>
          <div className="flex items-center">
            <span className="ml-[-12px] md:ml-[-50px]">
              <img className="img-fluid" src={line} alt="line" />
            </span>
            <p className="mb-0 pl-3 text-base font-medium">Social Posts</p>
          </div>
          <p className="my-3 font-medium lg:text-[40px] md:text-[32px] text-[28px] leading-[100%] md:w-[50%]">Social Media Interactions</p>
          <SocialPost />
        </Container>
        <div className="h-20"></div>
      </div>
      <Container>
      </Container>
      <div className="bg-[#fefbf5]">
        <div className="h-20"></div>
        <Container>
          <div className="flex items-center">
            <span className="ml-[-12px] md:ml-[-50px]">
              <img className="img-fluid" src={line} alt="line" />
            </span>
            <p className="mb-0 pl-3 text-base font-medium">Videos</p>
          </div>
          <p className="my-3 font-medium lg:text-[40px] md:text-[32px] text-[28px] leading-[100%] md:w-[50%]">Videos</p>
          <YouTubeVideos />
        </Container>
        <div className="h-20"></div>
        <div className="h-20"></div>
        <Container>
          <div className="flex items-center">
            <span className="ml-[-12px] md:ml-[-50px]">
              <img className="img-fluid" src={line} alt="line" />
            </span>
            <p className="mb-0 pl-3 text-base font-medium">Gallery</p>
          </div>
          <p className="my-3 font-medium lg:text-[40px] md:text-[32px] text-[28px] leading-[100%] md:w-[50%]">Gallery</p>
          <div className="h-20"></div>

          <Row className="px-0 px-md-4">
            {gallerImages?.map((image, index) => (
              <Col key={index} style={{ padding: "0" }} xs={6} md={3}>
                <img className="img-fluid" src={image} alt="galleryImg" />
              </Col>
            ))}
          </Row>
        </Container>
        <div className="h-20"></div>
      </div>
      <div className="h-20"></div>
      <Footer />
    </div>
  );
}

export default Index;
