import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1.5 pl-1 text-sm font-medium text-dark'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={` px-3.5 py-2.5 rounded-lg bg-white text-dark outline-none
                  border border-gray-200 w-full text-sm
                  transition-all duration-200
                  focus:border-brand focus:ring-2 focus:ring-brand/20
                  placeholder:text-muted ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input