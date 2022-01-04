import { imageConfigDefault } from "next/dist/server/image-config"
import Link from "next/link"

const Post = ({ post }) => {
    return (
        <div className="card">
            <img src={post.meta.img} alt="" className="post-img" />

            <div className="post-date">Posted on {post.meta.date}</div>

            <h3>{post.meta.title}</h3>

            <p>{post.meta.excerpt}</p>

            <Link href={`/b/${post.slug}`}>
                <a className="btn">Read More</a>
            </Link>
        </div>
    )
}

export default Post