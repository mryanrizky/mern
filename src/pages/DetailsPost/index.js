import React from "react";
import { LoginBg } from "../../assets";
import { Link } from "../../components";
import "./detailpost.scss";
import { useHistory } from "react-router-dom";
const DetailsPost = () => {
  const history = useHistory();
  return (
    <div className="detail-post-wrapper">
      <Link title="Kembali" onClick={() => history.push("/")} />
      <img className="img-cover" src={LoginBg} alt="thumb" />
      <div className="post-title">Judul</div>
      <div className="post-author">Author - Date Post</div>
      <div className="post-body">Body</div>
    </div>
  );
};

export default DetailsPost;
