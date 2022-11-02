import React, { useState } from "react";
import Filebase from "react-file-base64";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createPost } from "../../actions/posts";

function PostForm() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    description: "",
    category: "",
    link: "",
    selectedFile: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };
  return (
    <div className="custom_form post_form">
      <h5 className="form_header">Upload Posts</h5>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Creator</Form.Label>
          <Form.Control
            name="creator"
            value={postData.creator}
            onChange={(e) => {
              setPostData({ ...postData, creator: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            value={postData.title}
            onChange={(e) => {
              setPostData({ ...postData, title: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={postData.description}
            onChange={(e) => {
              setPostData({ ...postData, description: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control
            name="category"
            value={postData.category}
            onChange={(e) => {
              setPostData({ ...postData, category: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Link</Form.Label>
          <Form.Control
            name="link"
            value={postData.link}
            onChange={(e) => {
              setPostData({ ...postData, link: e.target.value });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image:</Form.Label>
          <br />
          <Filebase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PostForm;
