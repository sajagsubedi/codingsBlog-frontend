import { useState, useContext } from "react";
import { BlogContext, GlobalContext, ComponentContext } from "../index";

export default function BlogState(props) {
  const [blogs, setBlogs] = useState({ blogs: [] });
  const [category, setCategory] = useState();
  const { host, setProgress, setLoading } = useContext(GlobalContext);
  const { showAlert } = useContext(ComponentContext);
  const [globalBlogs, setGlobalBlogs] = useState({ blogs: [] });
  const [query, setQuery] = useState("");
  const [comments, setComments] = useState([]);
  const [commentDescription, setCommentDescription] = useState("");

  //function to fetch blogs
  const getBlogs = async () => {
    setLoading(true);
    setProgress(20);
    let url = `${host}/api/blogs/fetchallblogs`;
    if (category && query.length == 0) {
      url = url + "?category=" + category;
    } else if (!category && query.length !== 0) {
      url = url + "?query=" + query;
    } else if (category && query.length !== 0) {
      url = url + "?category=" + category + "&query=" + query;
    }
    setQuery("");
    setProgress(30);
    let response = await fetch(url);
    setProgress(70);
    response = await response.json();
    setProgress(80);
    setBlogs(response);
    setProgress(100);
    setLoading(false);
  };

  //function to fetch global blogs
  const fetchGlobalBlogs = () => {
    fetch(`${host}/api/blogs/fetchallblogs?pagesize=10000000`)
      .then((data) => data.json())
      .then((response) => setGlobalBlogs(response));
  };

  const updateBlog = async (id, newBlog) => {
    let response = await fetch(`${host}/api/blogs/updateblog/${id}`, {
      method: "PUT",
      body: JSON.stringify(newBlog),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        auth_token: localStorage.getItem("token"),
      },
    });
    response = await response.json();
    showAlert(response.msg, success ? "success" : "error");
    let upadatedBlogs = blogs.blogs.map((myBlog) => {
      if (myBlog._id == id) {
        return response.blog;
      }
      return myBlog;
    });

    setBlogs({ ...blogs, blogs: upadatedBlogs });
  };

  const addBlog = async (newBlog) => {
    const { Title, Description, category, imgUrl, SubTitle } = newBlog;
    let response = await fetch(`${host}/api/blogs/addblog`, {
      method: "POST",
      body: JSON.stringify({ Title, Description, category, imgUrl, SubTitle }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        auth_token: localStorage.getItem("token"),
      },
    });
    response = await response.json();
    if (!response.success) {
      return;
    }
    setBlogs({ ...blogs, blogs: [...response.blog, ...blogs.blogs] });
  };
  const deleteBlog = async (id) => {
    let response = await fetch(`${host}/api/blogs/deleteblog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        auth_token: localStorage.getItem("token"),
      },
    });
    response = await response.json();
    if (!response.success) {
      return;
    }
    let newBlogs = blogs.blogs.filter((blog) => blog._id !== id);
    setBlogs({ ...blogs, blogs: newBlogs });
  };
  // function to fetch comments
  const fetchComments = async (blogId) => {
    setLoading(true);
    let response = await fetch(`${host}/api/comment/getcomments/${blogId}`);
    response = await response.json();
    setComments(response.comments);
    setLoading(false);
  };

  // function to send Comment
  const addComment = async (blogId) => {
    let response = await fetch(`${host}/api/comment/add/${blogId}`, {
      method: "POST",
      body: JSON.stringify({ description: commentDescription }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        auth_token: localStorage.getItem("token"),
      },
    });
    response = await response.json();

    if (!response.success) {
      return showAlert(response.msg, "Error");
    }
    setComments(comments.concat(response.Comment));
    showAlert(response.msg,"success")
  };
  return (
    <BlogContext.Provider
      value={{
        blogs,
        getBlogs,
        addBlog,
        updateBlog,
        deleteBlog,
        globalBlogs,
        fetchGlobalBlogs,
        query,
        setQuery,
        category,
        setCategory,
        comments,
        fetchComments,
        commentDescription,
        setCommentDescription,
        addComment,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
}
