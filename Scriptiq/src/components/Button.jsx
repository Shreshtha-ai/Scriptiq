import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-brand",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-5 py-2.5 rounded-lg font-medium text-sm
            transition-all duration-200 hover:shadow-md active:scale-95
            ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}