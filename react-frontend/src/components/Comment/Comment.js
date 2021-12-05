import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

const Comment = ({ comment,replies,currentUserId,replyingComment, setReplyingComment, addComment , parentId = null}) => {
    const canReply = Boolean(currentUserId)
    const isReplying = replyingComment && replyingComment.id===comment.id ;
    const replyId = parentId ? parentId : comment.id
    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src="/user-icon.png" />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author"></div>
                    <div>{comment.time}</div>

                </div>
                <div className="comment-text">{comment.content}</div>
                <div className="comment-actions" >
                    {canReply && <div className="comment-action" onClick={() =>setReplyingComment({"id":comment.id})}>Reply</div>}
                </div>
                {
                    isReplying && <CommentForm handleSubmit={(text) => addComment(text,replyId)}></CommentForm>
                }
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map((reply) => (
                            <Comment
                                comment={reply}
                                key={reply.id}
                                replies={[]}
                                currentUserId={currentUserId}
                                replyingComment={replyingComment}
                                setReplyingComment={setReplyingComment}
                                addComment={addComment}
                                parentId={comment.id}
                               
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comment;