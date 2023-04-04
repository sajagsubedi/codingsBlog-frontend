import { useEffect } from "react";
import { BlogPage } from "./styles";

export default function BlogsPage({ blogData }) {
  let { Title, SubTitle, Description, imgUrl, publishedAt, urlToBlog } =
    blogData;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BlogPage>
      <div className="blogPageHead">
        <h1>
          {Title}
          <span>-{SubTitle}</span>
        </h1>
      </div>
      <div className="blogPageImgSection">
        <img src={imgUrl} alt="img" />
        <p className="publishedDateText">
          PublishedAt: {new Date(publishedAt).toDateString()}
        </p>
      </div>
      <div className="blogPageBlogBody">
        <p>{Description}</p>
      </div>
    </BlogPage>
  );
}
