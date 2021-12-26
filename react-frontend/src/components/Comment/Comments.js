import { useEffect, useLayoutEffect, useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import CommentService from '../../services/CommentService'

const Comments = ({currentUserId,comments,learningId,type="1"}) => {
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
        if (currentUserId === -1) {
            alert('Vui lòng đăng nhập để bình luận!')
            return;
        }
        var comment = {
            content: body,
            parentId: parentId,
            lessonId: null,
            vocabularyTopicId:null,
            grammarId:null,
            userId: currentUserId,
            type: type
        }
  
        if (type === "1") {
            comment.lessonId =learningId;
        } else if (type === "2") {
            comment.vocabularyTopicId =learningId;
        } else if (type === "3") {
            comment.grammarId =learningId;
        }

        console.log("COMMENT: ",comment)
        
        CommentService.addComment(comment).then(
           
            (comm) => {
                setBackendComments([comm.data,...backendComments]);
               
        })
        setReplyingComment(null)
    }

    return (
        
        <div className="comments">
            <h3 className="comments-title">Để lại bình luận ở bên dưới</h3>
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