import { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BlogItem } from "../styles";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { BlogContext, ComponentContext } from "../../../context/index";

export default function BlogComponent({ blogData }) {
  let { _id, Title, SubTitle, Description, imgUrl, publishedAt, category } =
    blogData;
  const { deleteBlog } = useContext(BlogContext);
  const { changeManipulatebox } = useContext(ComponentContext);
  return (
    <BlogItem>
      <div className="imgSection">
        {localStorage.getItem("isAdmin") && (
          <div className="blogManipulationIcons">
            <CiEdit
              onClick={() => {
                changeManipulatebox(true, "Update", blogData);
              }}
            />
            <MdDelete
              onClick={() => {
                deleteBlog(_id);
              }}
            />
          </div>
        )}
        <img src={imgUrl} alt="img" />
      </div>
      <div className="BlogBody">
        <div className="titleSection">
          <h1 className="BlogTitle">
            {Title}
            <span className="blogSubTitle">-{SubTitle}</span>
          </h1>
        </div>
        <p className="date"> -{new Date(publishedAt).toDateString()}</p>
        <div className="paragraphSection">
          <p className="BlogDescription">
            {Description.length > 250
              ? Description.slice(0, 250).concat("...")
              : Description}
          </p>
          <Link className="linkToBlog" to={`/${category}/${_id}`}>
            Read More <BsArrowRight />
          </Link>
        </div>
      </div>
    </BlogItem>
  );
}
