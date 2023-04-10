import React from "react";
import { Comments } from "../styles";
import { AiOutlineSend } from "react-icons/ai";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BlogContext,
  GlobalContext,
  AuthContext,
} from "../../../context/index";
import { useEffect } from "react";
import { Spinner } from "../../../Components/index";

export default function CommentSection({ blogId }) {
  const { user, fetchProfile } = useContext(AuthContext);
  const {
    comments,
    fetchComments,
    commentDescription,
    setCommentDescription,
    addComment,
    deleteComment
  } = useContext(BlogContext);
  const { loading } = useContext(GlobalContext);

  const handleChange = (e) => {
    setCommentDescription(e.target.value);
  };
  useEffect(() => {
    AOS.init({
      duration: 3000
    });
    if(localStorage.getItem("token")){
      fetchProfile()
    }
    fetchComments(blogId);
  }, []);

  return (
    <Comments>
      <hr />
      <div className="commentLists">
        <h1 className="mainText">Comments</h1>
        {loading && <Spinner />}
        {!loading && (
          <ul>
            {comments.map((data, i) => {
              return (
                <li data-aos="zoom-out-up" key={i}>
                  <div className="commentList">
                    <div className="firstCommentHalf">
                      {data.userId == user._id ? (
                        <button onClick={()=>deleteComment(data._id)} className="deleteCommentBTN">
                          <MdDelete />
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="secondCommentHalf">
                      <h3>{data.username}</h3>
                      <p className="date">
                        {new Date(data.date).toDateString()}
                      </p>
                      <p>-{data.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {!loading && comments.length == 0 && (
          <h1 className="mainText sm">No Comments Yet!</h1>
        )}
      </div>
      <div className="addNote">
        {localStorage.getItem("token") ? (
          <>
            <input
              type="text"
              value={commentDescription}
              onChange={handleChange}
              className="PrimaryInput"
              placeholder="Add comment..."
            />
            <button className="sendBTN" onClick={() => addComment(blogId)}>
              <AiOutlineSend />
            </button>
          </>
        ) : (
          <h3 className="mainText sm">Login to add comment</h3>
        )}
      </div>
    </Comments>
  );
}
