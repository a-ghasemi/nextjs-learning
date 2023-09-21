import React from "react";

const Button = ({ title, onClick }) => {

    const clickHandler = () => {
        onClick(title);
    }

    console.log('Button rendered');

    return(
        <>
            <button onClick={clickHandler}>{title}</button>
            <br/>
        </>
    );
}

export default React.memo(Button)