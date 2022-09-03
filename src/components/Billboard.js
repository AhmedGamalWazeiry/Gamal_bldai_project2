import React from "react";
import Style from "./Billboard.module.css";

const Billboard = () => {
  return (
    <>
      <article className={Style["advertisement"]}>
        <div className={Style["billboard-image"]}>
          <img src={require("../images/billboard-img.jpg")} alt="billboard" />
        </div>
        <div className={Style["billboard-title"]}>
          <h1>New to Udemy?Lucky you.</h1>
          <p>Courses start at E€169.99. Get your new-student offer now.</p>
        </div>
      </article>
    </>
  );
};

export default Billboard;
