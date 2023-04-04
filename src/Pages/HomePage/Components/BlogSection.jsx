import BlogComponent from "./BlogComponent.jsx";
import { Spinner } from "../../../Components/index";
import { useContext, useEffect } from "react";
import { Blogs } from "../styles";
import {
  BlogContext,
  GlobalContext,
  ComponentContext,
} from "../../../context/index";

export default function BlogSection(props) {
  const { blogs, getBlogs, category, setCategory } = useContext(BlogContext);
  const { changeManipulatebox, initialValue } = useContext(ComponentContext);
  const { loading, isAdmin } = useContext(GlobalContext);
  useEffect(() => {
    setCategory(props.category);
  }, [props.category]);
  useEffect(() => {
    getBlogs();
  }, [category]);
  return (
    <Blogs>
      {loading && <Spinner />}
      {!loading && localStorage.getItem("isAdmin") && (
        <div className="addBlogIcon">
          <button
            onClick={() => changeManipulatebox(true, "Add", initialValue)}
            className="PrimaryButton"
          >
            Add a blog +
          </button>
        </div>
      )}
      {!loading && <h1 className="mainText">Blogs</h1>}
      {!loading && blogs.blogs.length == 0 ? (
        <h1 className="mainText">No blogs found</h1>
      ) : (
        blogs.blogs.map((element) => {
          return <BlogComponent blogData={element} key={element._id} />;
        })
      )}
    </Blogs>
  );
}
