import React, {useState}  from "react";
import {Link, useNavigate} from "react-router-dom"
import {login as authLogin} from "../store/authSlice"
import {useDispatch} from "react-redux"
import {AuthService} from "../appwrite/auth"
import {Input, Button, Logo, Container} from "../compoenents"
import { useForm } from "react-hook-form"

function Login(){
    const  navigate = useNavigate()
    const useDispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const login = async(data) => {
        setError("")
        try{
          const session =   await AuthService.login(data)
          if(session){
            const userData = await AuthService.getCurrentUser()
            if(userData){
                dispatch(authLogin({userData}))
                navigate("/")
            }
          }
    }catch(error){
        setError(error.message)
    }

}
return (
    <div>
        className="flex flex-col items-center justify-center h-screen"
        <div className="w-full max-w-md">
            <div className = "mb-2 flex justify-center">
                <span className = "inline-block w-full max-w-[100px]">
                    <Logo width = "100%" />
                </span>

            </div>
            <h2 className = "text-2xl font-bold text-center mb-5">Sign in to your account</h2>
            <p className = "mt-2 text center text- base text-black-60">
                Don't have an account? <Link to = "/signup" className = "text-blue-600">Sign up</Link>
            </p>

            {error && <p className = "text-red-600 text-center mt-8">{error}</p>}

            <form onSubmit = {handleSubmit(login)} className = "mt-8">
                <div className = "space-y-4">
                    <Input
                    label = "Email:"
                    type = "email"
                    placeholder = "Enter your email"
                    {...register("email", {required: true,
                        validate:{
                            matchPattern: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address", 
                        }
                    })}
                    className = "w-full"
                    />
                    <Input
                    label = "Password:"
                    type = "password"
                    placeholder = "Enter your password"
                    {...register("password", {required: true,
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long",
                        },
                    })}
                    className = "w-full"
                    />
                    <Button type = "submit" className = "w-full"> Sign in</Button>
                </div>
            </form>



         </div>

    </div>
    )
}
export default Login