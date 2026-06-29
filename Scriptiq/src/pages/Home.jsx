import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className="w-full flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className='w-full py-20 lg:py-28 flex flex-col justify-center bg-gradient-to-br from-surface to-brand/5 border-b border-gray-100'>
                <Container>
                    <div className='flex flex-col items-center justify-center text-center max-w-3xl mx-auto'>
                        <h1 className='text-5xl md:text-7xl font-extrabold text-dark tracking-tight mb-6 drop-shadow-sm'>
                            Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600'>ScriptiQ</span>
                        </h1>
                        <p className='text-lg md:text-2xl text-muted mb-10 leading-relaxed font-light'>
                            Join the community of developers and writers. Share your code, ideas, and stories with the world today.
                        </p>
                        
                        {/* Only show Login/Signup buttons if the user is not logged in (we can guess based on if posts failed to load due to auth, but for now we'll just leave the buttons as a call to action) */}
                        <div className='flex items-center gap-4'>
                            <Link to="/login" className='px-8 py-3.5 rounded-full bg-brand text-white font-medium hover:bg-brand-dark transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg'>
                                Login to Read
                            </Link>
                            <Link to="/signup" className='px-8 py-3.5 rounded-full bg-white text-dark font-medium border border-gray-200 hover:border-brand/50 hover:bg-brand/5 transition-all duration-300 shadow-sm hover:-translate-y-1'>
                                Create Account
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Posts Section */}
            <div className='w-full py-16 bg-gray-50/50 flex-grow'>
                <Container>
                    <div className="flex items-center justify-between mb-10">
                        <h2 className='text-3xl font-bold text-dark relative inline-block'>
                            Recent Posts
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand rounded-full"></span>
                        </h2>
                    </div>

                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-muted">No posts available yet. Be the first to write one!</p>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
                            {posts.map((post) => (
                                <div key={post.$id} className="h-full">
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    )}
                </Container>
            </div>
        </div>
    )
}
export default Home