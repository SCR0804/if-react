import React from "react";
import './Title.css';


const Title = (props) => {
    return (
        <div className="title-wrap">
        <h2 className="title">{props.title}</h2>
        </div>
    )
}



export default Title;