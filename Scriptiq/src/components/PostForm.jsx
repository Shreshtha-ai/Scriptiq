import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Select, RTE, Button, Logo, Container } from "../components"
import { useSelector } from 'react-redux'
import appwriteService from '../appwrite/config'
import { useNavigate } from 'react-router-dom'

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || "active",


        },
    })
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        try {
            if (post) {
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

                if (file) {
                    appwriteService.deleteFile(post.featuredImage);
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    title: data.title,
                    slug: data.slug,
                    content: data.content,
                    status: data.status,
                    featuredImage: file ? file.$id : post.featuredImage,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                } else {
                    alert("Failed to update post. Please try again.");
                }
            } else {
                //only if file is there 
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

               
                    const dbPost = await appwriteService.createPost({
                        title: data.title,
                        slug: data.slug,
                        content: data.content,
                        status: data.status,
                        featuredImage: file ? file.$id : undefined,
                        userId: userData.$id,
                    });

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`);
                    } else {
                        alert("Failed to create post. Please try again.");
                    }
                
            }
        } catch (error) {
            console.error("PostForm :: submit :: error", error);
        }
    };

    const slugTransofrm = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s+/g, "-");


        }
        return ""
    }, [])

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransofrm(value.title), { shouldValidate: true })
            }
        })
        return () => subscription.unsubscribe()
    }, [watch, slugTransofrm, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap items-start gap-y-6">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input disabled

                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransofrm(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <div className='bg-surface-card rounded-xl border border-gray-100 p-5 space-y-4 sticky top-4'>
                    <Input
                        label="Featured Image :"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image")}
                    />
                    {post && (
                        <div className="w-full">
                            <img
                                src={appwriteService.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="rounded-lg"
                            />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        {...register("status", { required: true })}
                    />
                    <Button type="submit" bgColor={post ? "bg-green-600" : undefined} className="w-full">
                        {post ? "Update" : "Submit"}
                    </Button>
                </div>
            </div>
        </form>
    );
}
