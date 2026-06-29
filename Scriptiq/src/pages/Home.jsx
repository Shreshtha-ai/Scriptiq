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

    if (posts.length === 0) {
        return (
            <div className='w-full py-24 min-h-[calc(100vh-200px)] flex flex-col justify-center bg-gradient-to-br from-surface to-brand/5'>
                <Container>
                    <div className='flex flex-col items-center justify-center text-center max-w-2xl mx-auto'>
                        <h1 className='text-4xl md:text-6xl font-bold text-dark tracking-tight mb-6'>
                            Welcome to <span className='text-brand'>ScriptiQ</span>
                        </h1>
                        <p className='text-lg md:text-xl text-muted mb-10 leading-relaxed'>
                            Join the community of developers and writers. Share your code, ideas, and stories with the world today.
                        </p>
                        <div className='flex items-center gap-4'>
                            <Link to="/login" className='px-8 py-3 rounded-full bg-brand text-white font-medium hover:bg-brand-dark transition-all duration-300 shadow-sm hover:-translate-y-0.5 hover:shadow-md'>
                                Login to Read
                            </Link>
                            <Link to="/signup" className='px-8 py-3 rounded-full bg-white text-dark font-medium border border-gray-200 hover:border-brand/30 hover:bg-brand/5 transition-all duration-300 shadow-sm'>
                                Create Account
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <h1 className='text-2xl font-bold text-dark mb-6'>Recent Posts</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {posts.map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
export default Home