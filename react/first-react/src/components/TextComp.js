import { Component } from "react";

const TextComp = (props) =>{
    const {name, children} = props
    console.log(props);

    return(
        <div>
            <h1>{children}</h1>
            <p>{name}님</p>
        </div>
    )
}

export default TextComp;