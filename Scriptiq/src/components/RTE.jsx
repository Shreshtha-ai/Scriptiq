import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import conf from '../conf/conf'

// rte stands for rich text editor and it is a component that allows the user to edit the content of a post

export default function RTE({name,control,label, defaultValue = ""}) {
    return (
        <div className = "w-full">
            {label && <label className = "inline-block mb-1 pl-1">{label}</label>}
            <Controller
            name = {name || "content"}
            control = {control}
            render = {({field: {onChange}}) => (
                <Editor
                apiKey = {conf.tinymceApiKey}
                initialValue = {defaultValue}
                init = {{
                    initalValue: defaultValue,
                    height: 500,
                    menubar: true,
                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image", 
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "autoresize",
                        "autosave",
                        "autosave",
                    ],
                    toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image | " +
                    "alignright alignjustify | bullist numlist outdent indent | image | " +
                    "removeformat | help",
                    
                }}
                onEditorChange = {onChange}
            />)}
            />

           
        </div>
    )
}