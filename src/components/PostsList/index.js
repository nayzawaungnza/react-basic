import React from 'react'
import './index.css'
import styles from './single_post.module.css'
export default function PostsList({posts}) {
  return (
    <div className='post-list'>
        {posts.map(post => (
            <div className={`single-post ${styles.card}`} key={post.id}>{post.title} {post.status}</div>
        ))}
        
      </div>
  )
}
