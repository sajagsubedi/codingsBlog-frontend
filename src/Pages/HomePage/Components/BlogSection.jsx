import BlogComponent from "./BlogComponent.jsx";
import { Spinner } from "../../../Components/index";
import { useContext, useEffect } from "react";
import {useParams} from "react-router-dom"
import { Blogs } from "../styles";
import {
  BlogContext,
  GlobalContext,
  ComponentContext,
} from "../../../context/index";
import InfiniteScroll from "react-infinite-scroll-component";

export default function BlogSection() {
  const {
    blogs,
    getBlogs,
    category,
    setCategory,
    query,
    setQuery,
    fetchMoreBlogs,
    setPage,
    isQuery,
    setIsQuery,
  } = useContext(BlogContext);
  const { changeManipulatebox, initialValue } = useContext(ComponentContext);
  const { loading, isAdmin } = useContext(GlobalContext);
  const {category:routerCategory}=useParams()
  useEffect(() => {
    setQuery("");
    window.scrollTo(0, 0);
    setCategory(routerCategory);
    setPage(1);
    console.log(routerCategory)
  }, [routerCategory]);
  useEffect(() => {
    getBlogs();
  }, [isQuery]);
  useEffect(() => {
    getBlogs();
  }, [category]);
  return (
    <Blogs>
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
      {loading && <Spinner />}
      <InfiniteScroll
        className="infinite-scroll-component"
        dataLength={blogs.blogs.length}
        next={fetchMoreBlogs}
        hasMore={blogs.blogs.length !== blogs.TotalResults}
        loader={<Spinner />}
      >
        {!loading && blogs.blogs.length == 0 ? (
          <h1 className="mainText">No blogs found</h1>
        ) : (
          blogs.blogs.map((element) => {
            return <BlogComponent blogData={element} key={element._id} />;
          })
        )}
      </InfiniteScroll>
    </Blogs>
  );
}
