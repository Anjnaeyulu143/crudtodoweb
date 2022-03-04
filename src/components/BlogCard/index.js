import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { BlogItemDetails } from "../BlogItemDetails";

export const BlogCard = (props) => {
  const { item } = props;
  const { id, title, discription, authorName, date } = item;
  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="row">
          <Link to={`/post/${id}`} style={{ textDecoration: "none" }}>
            <div className="col-12">
              <li className="list_item card_container">
                <div className="card p-3 shadow-sm  mb-3 bg-white rounded">
                  <h1 className="text-dark ">{title}</h1>
                  <p className="text-dark discription">{discription}</p>
                  <p
                    className="text-end "
                    style={{ textDecoration: "underline" }}
                  >
                    more
                  </p>
                </div>
              </li>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
