import React from "react";
import { Input, Button, Upload, Gap, TextArea, Link } from "../../components";
import "./createpost.scss";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const history = useHistory();
  return (
    <div className="item-post">
      <Link title="Kembali" onCLick={() => history.push("/")} />
      <p className="title">Create Post Page</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="save" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreatePost;
