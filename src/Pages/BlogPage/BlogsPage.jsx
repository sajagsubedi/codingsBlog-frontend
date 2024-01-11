import React,{ useContext, useEffect,useState } from "react";
import BlogPageSection from "./Components/BlogPageSection";
import CommentSection from "./Components/CommentSection";
import {useParams} from "react-router-dom"
import { BlogContext } from "../../context/index";

export default function BlogPage() {
  const {blogId}=useParams()
  const { fetchSingleBlog } = useContext(BlogContext);
  const [blogData,setBlogData]=useState({_id:"",Title:"",SubTitle:"",Description:"",imgUrl:"",publishedAt:"",category:"",})
  const fetchBlog=async()=>{
      let blogData=await fetchSingleBlog(blogId)
    setBlogData(blogData)
  }
  useEffect(()=>{
    fetchBlog()
  },[fetchSingleBlog])
  return (
    <section>
      <BlogPageSection blogData={blogData} />
      <CommentSection blogId={blogId} />
    </section>
  );
}
