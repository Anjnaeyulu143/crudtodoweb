import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleContext } from "../../context/ArticleContext";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

export const CreateBlog = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [article, setArticle] = useContext(ArticleContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePost = (e) => {
    setPost(e.target.value);
  };

  const addArticle = (e) => {
    e.preventDefault();
    if (name === "" && post === "") {
      setArticle((prevState) => [...prevState]);
    } else {
      setArticle((prevState) => [
        ...prevState,
        {
          id: uuidv4(),
          title: name,
          discription: post,
          authorName: "Anjan",
          date: "27/12/2021",
        },
      ]);
    }
    navigate("/");
  };

  const blured = (e) => {
    if (e.target.value === "") {
      setError("* please enter the title name of the article");
    } else {
      setError("");
    }
  };

  const bluredContent = (e) => {
    if (e.target.value === "") {
      setContent("* please enter the some content");
    } else {
      setContent("");
    }
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12 title_container mb-3">
            <h1 className="text-center p-3 title m-auto fs-2">Create Blog</h1>
          </div>
          <div className="col-12 ">
            <form
              className="p-4 pt-4 shadow-lg p-3 mb-4 bg-white rounded"
              onSubmit={addArticle}
            >
              <div className="mt-4">
                <input
                  type="text"
                  className="form-control w-25 fs-4"
                  value={name}
                  onChange={updateName}
                  id="title"
                  placeholder="title"
                  onBlur={blured}
                />
                <p className="text-danger mt-2 fs-3">{error}</p>
              </div>
              <div className="mt-4">
                <textarea
                  cols={50}
                  rows={5}
                  className="w-75 form-control fs-4"
                  placeholder="content"
                  onChange={updatePost}
                  onBlur={bluredContent}
                ></textarea>
                <p className="text-danger mt-2 fs-3">{content}</p>
              </div>
              <div className="mt-4">
                <button className="btn btn-primary fs-2 ">Save As</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
