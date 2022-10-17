import React from "react";
import blogStyles from "../BlogArticles/BlogArticles.module.css";

const BlogArticels = () => {
  return (
    <div className="mt-32">
      <h3 className="text-5xl text-center my-8">Articles</h3>
      <div className={blogStyles.blogBox}>
        <div className={blogStyles.blogContainer}>
          <hr className="my-5" />
          <div className={blogStyles.blogItem}>
            Lorem ipsum dolor{" "}
            <span className="text-black"> 10 February 2022 </span>sit amet
            consectetur adipisicing elit. Repellendus consectetur, eos
            consequatur provident repella
          </div>
          <div className={blogStyles.blogItem}>
            Lorem ipsum dolor{" "}
            <span className="text-black"> 10 February 2022 </span>sit amet
            consectetur adipisicing elit. Repellendus consectetur, eos
            consequatur provident repella
          </div>
          <hr className="my-5" />
          <div className={blogStyles.blogItem}>
            Im ipsum dolor{" "}
            <span className="text-black"> 10 February 2022 </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil
            odit commodi!
          </div>
          <hr className="my-5" />
          <div className={blogStyles.blogItem}>
            Lorem, ipsum. <span className="text-black"> 10 February 2022 </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            dolore sint aliquid.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticels;
