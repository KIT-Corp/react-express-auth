import React, {useState} from 'react'
import './SearchBar.css'


export const SearchBar = () => {
    //input is used to the variable we will be looking at 
    //setInput is used to change the variable 
    //we are setting it to our empty string 
    const [input, setInput] = useState('')
    return (
    <div className= "input-wrapper"> 
    {/* value will be whatever our input is */}
    {/* on change will be whatever is being changed on input*/}
        <input placeholder= "type to search. . ." value= {input} onChange={(e) => setInput(e)
        }/>
    </div>
    )
}