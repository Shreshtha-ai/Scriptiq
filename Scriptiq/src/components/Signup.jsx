import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {login as authLogin} from "../store/authSlice"
import {useDispatch} from "react-redux"
import authService, {AuthService} from "../appwrite/auth"
import {Input, Button, Logo, Container} from "../components/index"
import { set, useForm } from "react-hook-form"

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const signup = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if(userData){
            const currentUser =   await  authService.getCurrentUser()
            if(currentUser){
                dispatch(authLogin({userData: currentUser}))
                navigate("/")
            
            }
        }

            
        } catch (error) {
            setError(error.message)
            
        }
    }
  return (
  <div className="flex items-center justify-center min-h-[80vh] px-4">
            <div className="w-full max-w-md bg-surface-card rounded-2xl shadow-sm
              border border-gray-100 p-8 transition-shadow duration-300 hover:shadow-md">
                <div className="mb-4 flex justify-center">
                    <span className="inline-block w-full max-w-[160px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-2xl font-bold text-center text-dark mb-2">
                    Create your account
                </h2>
                <p className="text-center text-sm text-muted mb-6">
                    Already have an account?{' '}
                    <Link to="/login"
                      className="text-brand font-medium hover:text-brand-dark transition-colors">
                        Sign In
                    </Link>
                </p>
                {error && (
                    <p className="text-red-500 text-sm text-center bg-red-50
                      rounded-lg py-2 px-3 mb-4">
                        {error}
                    </p>
                )}
                <form onSubmit={handleSubmit(signup)}>
                    <div className='space-y-4'>
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            type="text"
                            {...register("name", { required: true })}
                        />
                        <Input
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                        />
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup