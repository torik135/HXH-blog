import { imageConfigDefault } from "next/dist/server/image-config"
import Link from "next/link"

const Post = ({ post }) => {
    return (
        <div className="card">
            <img src={post.data.img} alt="" />

            <div className="post-date">Posted on {post.data.date}</div>

            <h3>{post.data.title}</h3>

            <p>{post.data.excerpt}</p>

            <Link href={`/b/${post.slug}`}>
                <a className="btn">Read More</a>
            </Link>
        </div>
    )
}

export default Post