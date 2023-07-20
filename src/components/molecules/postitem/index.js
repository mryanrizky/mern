import React from "react";
import { RegisterBg } from "../../../assets";
import "./postitem.scss";
import { Button } from "../../atoms";
import { useHistory } from "react-router-dom";

const PostItem = () => {
  const history = useHistory();
  return (
    <div className="post-item">
      <img className="img-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Judul</p>
        <p className="author">Author</p>
        <p className="body">Body</p>
        <Button
          title="Read More"
          onClick={() => history.push("/details-post")}
        />
      </div>
    </div>
  );
};

export default PostItem;
