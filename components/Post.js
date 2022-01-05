import { imageConfigDefault } from "next/dist/server/image-config"
import Link from "next/link"

const Post = ({ post }) => {
    return (
        <div className="card">
            <div className="post-date">
                Posted on {post.meta.date}
            </div>

            {/* <img src={post.meta.img} alt="" className="post-img" /> */}



            <h2 className="post-title">
                {post.meta.title}
            </h2>

            <div className="line"></div>

            <p>{post.meta.excerpt}</p>

            <Link href={`/b/${post.slug}`}>
                <a className="btn">Read More</a>
            </Link>
        </div>
    )
}

export default Post