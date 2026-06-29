import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-surface-card rounded-xl overflow-hidden border border-gray-100
        shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1'>
        <div className='w-full aspect-video overflow-hidden'>
          {post.featuredImage && (
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className='w-full h-full object-cover transition-transform duration-300
              group-hover:scale-105'
          />
          )}
        </div>
        <div className='p-4'>
          <h2 className='text-base font-semibold text-dark leading-snug'>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  )
}


export default PostCard 
