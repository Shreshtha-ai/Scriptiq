import React , {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
    const id = useId()
  return (
    <div className = 'w-full'>
        {label && <label
             htmlFor={id}
             className='inline-block mb-1.5 pl-1 text-sm font-medium text-dark'>
             {label}
             </label>}
             <select 
             {...props}
             id = {id}
             ref = {ref}
             className={`px-3.5 py-2.5 rounded-lg bg-white text-dark outline-none
                  border border-gray-200 w-full text-sm
                  transition-all duration-200
                  focus:border-brand focus:ring-2 focus:ring-brand/20
                  placeholder:text-muted ${className}`}>

              {options?.map((option) => (<option key={option} value = {option}>
                {option}
              </option>
              ))}

             </select>
        
    </div>
  )
}

export default React.forwardRef(Select)