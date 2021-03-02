import React, { useEffect, useState } from 'react'
import axios from "axios";

const CommentList = ({ postId }) => {

    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(response.data);
    }

    useEffect(() => {
        fetchComments();
    }, [])

    console.log(comments)
    const renderComments = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    return (
        <ul>
            {renderComments}
        </ul>
    )
}

export default CommentList;
