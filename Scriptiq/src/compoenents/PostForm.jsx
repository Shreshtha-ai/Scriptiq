import React , {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Input,Select,RTE,Button,Logo,Container} from "../compoenents"
import {useSelector} from 'react-redux'
import appwriteService from '../appwrite/config'
import {useNavigate} from 'react-router-dom'

function PostForm({post}){
    const {register, handleSubmit, watch, setValue,control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.status|| '',
            status: post?.status || "active",


        },
    })
    

    return (
        <div> POstFOrm</div>
    )
}
