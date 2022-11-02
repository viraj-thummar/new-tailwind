import React from "react";
import { useSelector } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import rightArror from "../../images/arrow-right.svg";

function BlogArticle(props) {
  const blogs = props.blogs;
  return (
    <div className="BlogArticle">
      <Row>
        {blogs?.map((blog, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mt-5">
            <Card style={{ border: "none" }}>
              <div className="h-[20%] sm:w-[100%] w-[80%] max-w-[100%]">
                <Card.Img variant="top" src={blog.selectedFile} />
              </div>
              <p className="mt-[16px] m-[0] ">{blog.category}</p>
              <Card.Title className="!text-[24px] !font-medium leading-[100%] my-3">
                {blog.title.substr(0, 25)}
                {blog.title.length > 25 && <span>...</span>}
              </Card.Title>
              <Card.Text className="text-[16px] text-[#4d4d4d] font-base">
                {blog.description.substr(0, 200)}
              </Card.Text>
              <p className="text-[16px] text-[#4d4d4d] font-base leading-[150%]">
                July 14, <span>{blog.creator}</span>
              </p>
              <div className="flex items-center">
                <a className="text-[#000] decoration-transparent text-[16px] font-base leading-[150%]" href={blog.link}>
                  Read More
                </a>
                <span className="h-[16px] w-[16px] ml-[10px]">
                  <img
                    className="img-fluid"
                    src={rightArror}
                    alt="rightArror"
                  />
                </span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BlogArticle;
