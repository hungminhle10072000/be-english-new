import { useEffect, useLayoutEffect, useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import CommentService from '../../services/CommentService'

const Comments = ({currentUserId,comments,learningLessonId}) => {
    const [backendComments, setBackendComments] = useState(comments)
    const [replyingComment, setReplyingComment] = useState(null)
    const rootComments = backendComments.filter((backendComment) => backendComment.parentId===null)

    useEffect(()=> {
        setBackendComments(comments)
    }, [comments])

    const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

    const addComment = (body,parentId) => {
        var comment = {
            content: body,
            parentId: parentId,
            lessonId: learningLessonId,
            userId: currentUserId,
            type: "1"
        }
        CommentService.addComment(comment).then(
            (comm) => {
                setBackendComments([comm.data,...backendComments]);
        })
        setReplyingComment(null)
    }


    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <CommentForm handleSubmit={addComment}/>
            <br/>
            <div className="comment-container">
                {
                rootComments.map((rootComment) =>
                <Comment key={rootComment.id} comment= {rootComment} 
                replies={getReplies(rootComment.id)} currentUserId={currentUserId}
                replyingComment={replyingComment} setReplyingComment={setReplyingComment}
                addComment={addComment}/>)
                }
            </div>
        </div>
    )
}

export default Comments;