import React, { useState, useContext } from "react";
import { ArticleContext } from "../../context/ArticleContext";
import { BlogCard } from "../BlogCard";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Link, Outlet } from "react-router-dom";
import "./index.css";

export const Blogs = () => {
  const [article, SetArticle] = useContext(ArticleContext);
  return (
    <div>
      <div className="container-fluid sticky-top">
        <div className="row">
          <div className="col-12 title_container mt-2">
            <h1 className="m-auto title ">Blogs</h1>
            <Link to="/post" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                startIcon={<PostAddIcon style={{ fontSize: "2rem" }} />}
                style={{
                  backgroundColor: "blue",
                  fontSize: "0.90rem",
                  color: "white",
                  margin: "10px",
                  marginRight: "2em",
                  borderRadius: "10px",
                  padding: "0.5em 1.75em",
                }}
              >
                Add
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {article.map((item) => (
        <BlogCard item={item} key={item.id} />
      ))}
    </div>
  );
};
