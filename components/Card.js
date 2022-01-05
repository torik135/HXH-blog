import Link from "next/link"

const Card = ({ post }) => {
    return <>


        <article className="card-box">
            <div className="card-header">
                <p>
                    {post.meta.date}
                </p>
                <h2 className="post-title">
                    {post.meta.title}
                </h2>
            </div>
            <div className="line"></div>
            <div className="card-content">
                <p>{post.meta.excerpt}</p>
            </div>
        </article>

    </>

}

export default Card
