import React, { useContext } from "react";
import { ArticleContext } from "../../context/ArticleContext";
import { BlogItemDetails } from "../BlogItemDetails";
import { useParams, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./index.css";

export const BlogDetails = () => {
  const { id } = useParams();

  const [article, setArticle] = useContext(ArticleContext);

  //  console.log(article)

  const filterData = article.filter((item) => item.id == id);

  // console.log(filterData)

  const updateBlogList = (id) => {
    const dataFilter = article.filter((item) => item.id != id);
    setArticle((prevState) => [...dataFilter]);
    console.log(dataFilter);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 title_container mt-2">
            <h1 className="m-auto title mt-2 mb-2">Blog Details</h1>
          </div>
          <div className="col-12 p-4">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                startIcon={
                  <KeyboardBackspaceIcon style={{ fontSize: "1.5rem" }} />
                }
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  marginTop: "8px",
                  marginBottom: "8px",
                  borderRadius: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "1rem",
                }}
              >
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {filterData.map((item) => (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h1 className="p-3 blogdetails__title">{item.title}</h1>
                <div className="d-flex flex-row blogdetails__info">
                  <p className="p-2 ">{item.authorName}</p>
                  <p className="p-2 ">{item.date}</p>
                </div>
              </div>
              <div className="col-12">
                <p className="p-4 blogdetail__discription">
                  {item.discription}
                </p>
                <div className="text-end">
                  <Link to={`/${id}`} style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      startIcon={<EditIcon style={{ fontSize: "1.25rem" }} />}
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        marginTop: "8px",
                        marginBottom: "8px",
                        marginRight: "20px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        fontSize: "1rem",
                        marginRight: "20px",
                      }}
                    >
                      Edit
                    </Button>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      startIcon={<DeleteIcon style={{ fontSize: "1.25rem" }} />}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        margin: "10px 0px",
                        marginRight: "50px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        fontSize: "1rem",
                      }}
                      onClick={() => updateBlogList(id)}
                    >
                      Delete
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
