import { useState, useContext } from "react";
import { FormSection } from "../../../styles/CommonStyles";
import { BlogContext, ComponentContext } from "../../../context/index";

export default function ManipulateBlog(props) {
  const { addBlog, updateBlog } = useContext(BlogContext);
  const { manipulateboxtype, blogboxValue, setManipulatebox } =
    useContext(ComponentContext);
  const [blog, setBlog] = useState(blogboxValue);
  //Function to change the state of input
  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBlog = JSON.parse(JSON.stringify(blog));
    if (newBlog.category.length == 0) {
      newBlog.tag = "General";
    }
    //adding or updatting Blog using the manipulateboxtype
    if (manipulateboxtype == "Add") {
      addBlog(newBlog);
    } else {
      updateBlog(blog._id, newBlog);
    }
    setManipulatebox(false);
  };

  return (
    <FormSection className="manipulateBlogSection">
      <div className="Close">
        <button
          onClick={() => {
            setManipulatebox(false);
          }}
          className="CloseBtn"
        >
          ×
        </button>
      </div>
      <h1 className="mainText sm">{manipulateboxtype} Blog</h1>
      <form className="globalForm">
        <input
          className="PrimaryInput"
          name="imgUrl"
          type="url"
          placeholder="Enter the url to image"
          value={blog.imgUrl}
          onChange={handleChange}
          minLength="3"
          required
        />
        <input
          className="PrimaryInput "
          name="Title"
          value={blog.Title}
          placeholder="Enter the title for blog"
          onChange={handleChange}
          minLength="3"
          required
        />
        <input
          className="PrimaryInput "
          name="SubTitle"
          value={blog.SubTitle}
          onChange={handleChange}
          minLength="3"
          placeholder="Enter the Sub title for blog"
          required
        />
        <textarea
          onChange={handleChange}
          name="Description"
          value={blog.Description}
          className="PrimaryInput"
          placeholder="Enter description of blog"
          minLength="5"
          required
        ></textarea>
        <input
          onChange={handleChange}
          name="category"
          value={blog.category}
          className="PrimaryInput"
          placeholder="Enter category for blog"
        />

        <button
          type="submit"
          disabled={
            blog.Description.length < 5 || blog.Title.length < 3 || !blog.imgUrl
          }
          onClick={handleSubmit}
          className="PrimaryButton"
        >
          {manipulateboxtype} Blog
        </button>
      </form>
    </FormSection>
  );
}
