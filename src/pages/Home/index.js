import React from "react";
import { Button, PostItem, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create post"
          onClick={() => history.push("/create-post")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>

      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
