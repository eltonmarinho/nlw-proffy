import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name:string;
    label: string;
    options:Array<{
        value:string;
        label:string;
    }>

}

const Select:React.FC<SelectProps> = ({label,name, options, ...rest}) =>{
    return(
        <div className="select-block">
            <label htmlFor="subject">{label}</label>
            <select value="" id={name} {...rest}>
                <option  hidden disabled>Select option</option>
                {options.map(option =>{
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
}
export default Select