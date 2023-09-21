import React from "react";

export default function ({ title, onClick }){

    const clickHandler = () => {
        onClick(title);
    }

    return(
        <>
            <button onClick={clickHandler}>{title}</button>
            <br/>
        </>
    );
}