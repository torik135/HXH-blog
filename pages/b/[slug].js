import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    console.log(paths)
    return {
        paths,
        fallback: false // 404 if not exist
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const mdWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const { data: meta, content } = matter(mdWithMeta)

    return {
        props: {
            meta,
            slug,
            content
        }
    }
}

const PostPage = ({ meta: { title, excerpt, date, img }, slug, content }) => {
    return <>

        <Link href="/">
            <a className="btn btn-back">back</a>
        </Link>

        <div className="card card-page">
            <h1 className="post-title">{title}</h1>
            <div className="post-date-page">Pub date {date}</div>

            <div className="line"></div>

            <img src={img} alt={img} />

            <div className="m-1">
                <div className="line"></div>
                <i>{excerpt}</i>
                <div className="line"></div>
            </div>

            <div className="post-body py-md">
                <div
                    dangerouslySetInnerHTML={
                        { __html: marked(content) }
                    }>

                </div>
            </div>
        </div>

    </>
}

export default PostPage
