import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

import Head from 'next/head'

import Post from '../components/Post'

export const getStaticProps = async () => {
  // read dir
  const files = fs.readdirSync(path.join('posts'))

  // create slug from file with frontmatter
  const posts = files.map(filename => {
    // slug
    const slug = filename.replace('.md', '')

    // frontmatter
    const mdWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: meta } = matter(mdWithMeta)

    return {
      slug,
      meta
    }
  })

  return {
    props: {
      posts,
    },
  }
}


export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          // <p>{post.data.title}</p>
          <Post post={post} />
        ))}
      </div>

    </div>
  )
}

