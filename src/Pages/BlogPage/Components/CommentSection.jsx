import React from "react";
import { Comments } from "../styles";
import {AiOutlineSend} from "react-icons/ai"
import { useContext } from "react";
import { BlogContext, GlobalContext } from "../../../context/index";
import { useEffect } from "react";
import {Spinner} from "../../../Components/index"

export default function CommentSection({blogId}) {

  const {comments,fetchComments,commentDescription,setCommentDescription,addComment} = useContext(BlogContext)
  const {loading} = useContext(GlobalContext)

  const handleChange=(e)=>{
    setCommentDescription(e.target.value)
  }


  useEffect(() => {
    fetchComments(blogId)
  }, [])
  
  return (
    <Comments>
        <hr/>
      <div className="commentLists">
        <h1 className="mainText">Comments</h1>
          {loading &&<Spinner/>}
        {!loading &&
        <ul>
        {comments.map((data,i)=>{
          return(
          <li key={i}>
            <div className="commentList">
                <h3>{data.username}</h3>
                <p>-{data.description}</p>
            </div>
          </li>
          )
        })}
        </ul>}
        {!loading&&comments.length==0&&<h1 className="mainText sm">No Comments Yet</h1>}
      </div>
      <div className="addNote">
        <input type="text" value={commentDescription} onChange={handleChange} className="PrimaryInput" placeholder="Add comment..."/>
        <button className="sendBTN" onClick={()=>addComment(blogId)}>
            <AiOutlineSend/>
            </button>
      </div>
    </Comments>
  );
}
