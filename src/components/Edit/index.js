import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleContext } from "../../context/ArticleContext";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
// import "./index.css"

export const Edit = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [article, setArticle] = useContext(ArticleContext);

  // console.log(id)

  // const updateName = (e) => {

  //     setName(e.target.value)

  // }

  // const updatePost = (e) => {
  //     setPost(e.target.value)
  // }

  const filterData = article.filter((item) => item.id === id);

  const addArticle = (e) => {
    e.preventDefault();

    if (name === "" && post === "") {
      navigate("/");
    } else {
      const fil = article.filter((item) => item.id !== id);
      setArticle([...fil, { id: id, title: name, discription: post }]);
      console.log(fil);
      navigate("/");
    }
  };

  // console.log(filterData)

  // console.log(article)

  return (
    <>
      {filterData.map((item) => {
        const { title, discription } = item;
        return (
          <>
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col-12 title_container mb-3">
                  <h1 className="text-center p-3 title m-auto">Create Blog</h1>
                </div>
                <div className="col-12 ">
                  <form
                    className="p-4 pt-4 shadow-lg p-3 mb-4 bg-white rounded "
                    onSubmit={addArticle}
                  >
                    <div className="mt-4">
                      <input
                        style={{ fontSize: "1.5rem" }}
                        type="text"
                        className="form-control w-25 h-25"
                        defaultValue={title}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        id="title"
                      />
                    </div>
                    <div className="mt-4">
                      <textarea
                        style={{ fontSize: "1.2rem" }}
                        cols={50}
                        rows={5}
                        className="w-75 form-control"
                        onChange={(e) => setPost(e.target.value)}
                        defaultValue={discription}
                      ></textarea>
                    </div>
                    <div className="mt-4">
                      <Button
                        variant="contained"
                        style={{ fontSize: "1rem" }}
                        type="submit"
                      >
                        Save As
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
