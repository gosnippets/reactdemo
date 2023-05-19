import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
    let { postid } = useParams();
    return (
        <div>BlogDetails Post ID={postid}</div>
    )
}
