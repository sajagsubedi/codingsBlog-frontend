import { useState, useContext } from "react";
import { BlogContext, GlobalContext, ComponentContext } from "../index";

export default function BlogState(props) {
  //states
  const [blogs, setBlogs] = useState({ TotalResults: 0, blogs: [] });
  const [globalBlogs, setGlobalBlogs] = useState({ blogs: [] });
  const [query, setQuery] = useState("");
  const [comments, setComments] = useState([]);
  const [commentDescription, setCommentDescription] = useState("");
  const [page, setPage] = useState(1);
  const [pagesize, setPagesize] = useState(4);
  const [isQuery, setIsQuery] = useState(true);

  //function and values imported from context
  const [category, setCategory] = useState();
  const { host, setProgress, setLoading } = useContext(GlobalContext);
  const { showAlert } = useContext(ComponentContext);

  //function to fetch blogs
  const getBlogs = async () => {
    setQuery("")
    setLoading(true);
    setProgress(20);
    let url = `${host}/api/blogs/fetchallblogs?page=1&pagesize=${pagesize}`;

    //adding category to the url if it exists
    if (category) {
      url = url + "&category=" + category;
    }
    //adding query to the url if it exists
    if (query.length !== 0) {
      url = url + "&query=" + query;
    }
    setProgress(30);
    let response = await fetch(url);
    setProgress(70);
    response = await response.json();
    setProgress(80);
    setBlogs(response);
    setProgress(100);
    setLoading(false);
  };

  //function to fetch more blogs infinite scroll
  const fetchMoreBlogs = async () => {
    let url = `${host}/api/blogs/fetchallblogs?page=${
      page + 1
    }&pagesize=${pagesize}`;

    //adding category to the url if it exists
    if (category) {
      url = url + "&category=" + category;
    }
    let response = await fetch(url);
    response = await response.json();
    setBlogs({ ...response, blogs: blogs.blogs.concat(response.blogs) });
    setPage(page + 1);
  };

  //function to fetch global blogs
  const fetchGlobalBlogs = () => {
    fetch(`${host}/api/blogs/fetchallblogs`)
      .then((data) => data.json())
      .then((response) => setGlobalBlogs(response));
  };

  //function to update blog
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
    showAlert(response.msg, "success");
    setCommentDescription("");
  };

  //function to delete  comment
  const deleteComment = async (id) => {
    let url = `${host}/api/comment/delete/${id}`;
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        auth_token: localStorage.getItem("token"),
      },
    });
    response = await response.json();
    if (!response.success) {
      showAlert(response.msg, "Error");
      return;
    }
    let newComments = comments.filter((data) => data._id !== id);
    setComments(newComments);
    showAlert(response.msg, "success");
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
        deleteComment,
        fetchMoreBlogs,
        setPage,
        isQuery,
        setIsQuery,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
}
