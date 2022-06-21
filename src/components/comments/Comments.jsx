import React, { useEffect, useState } from "react";
import { getComments as getCommentsApi , createComment as createCommentApi , deleteComment as deleteCommentApi , updateComment as updateCommentApi} from "../../api";
import Comment from "../comment/Comment";
import CommentForm from "../commentform/CommentForm";

const Comments = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment , setActiveComment] = useState(null);
  const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null);
  console.log(backendComments);
  console.log(rootComments)


  const getReplies = (commentId) => {
    return (
      backendComments.filter((backendComment) => backendComment.parentId === commentId).sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    )
    }

    const addComment = (text , parentId) => {
        console.log(text , parentId);
        createCommentApi(text , parentId).then(comment => {
          setBackendComments([comment , ...backendComments])
          setActiveComment(null);
        })
    }


    const deleteComment = (commentId) => {
        if(window.confirm("Arue You Sure You Want to remove Comment")){
          deleteCommentApi(commentId).then(()=> {
            const updatedBackendComments = backendComments.filter((backendComment)=> backendComment.id !== commentId);
            setBackendComments(updatedBackendComments);
          })
        }
    }


    const updateComment = (text, commentId) => {
      updateCommentApi(text).then(() => {
        const updatedBackendComments = backendComments.map((backendComment) => {
          if (backendComment.id === commentId) {
            return { ...backendComment, body: text };
          }
          return backendComment;
        });
        setBackendComments(updatedBackendComments);
        setActiveComment(null);
      });
    };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);
  return (
    <div className="comments">
        <h3 className="comments-title">Comments</h3>
        <div className="comments-container">
          {rootComments.map((rootComment) =>(
            <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            addComment={addComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            updateComment={ updateComment}
            />
          ))}
        </div>
        <div className="comment-form-title">Write Comment</div>
        <CommentForm  submitLabel="Write" handleSubmit={addComment}  />
    </div>
  );
};

export default Comments;
