import {FC} from "react";

interface reqProps{
    param?:string,
    handle?:any,
    type?:string,
    placeholder?:string,
    name?:string,
    aria_label?:string
    
}
export const TextField :FC<reqProps> =({param,handle,type,placeholder,aria_label,name}) =>
{
    return(
        <div className="mx-0 border-b border-purple-700 py-2">
        <input 
        className="appearance-none bg-transparent border-none w-full text-gray-700  mr-3 py-1 px-2 leading-tight focus:outline-none" 

        type={type}
        value= {param}
        placeholder={placeholder} aria-label={aria_label}
        name={name}
        onChange= {handle}
        />
        </div>
    )
}