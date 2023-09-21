import React from "react";
import Button from "../ui/button";

export default function (){
    const items = ['Apple', 'Banana', 'Cherry'];

    const [outputs, setOutputs] = React.useState([]);

    const clickHandler = (title) => {
        console.log(title);
        setOutputs((prevOutputs) => ([...prevOutputs, title]))
    }

    return(
        <>
            <h2>This is body heading</h2>
            <p>This is body paragraph</p>
            {
                items.map((item) => (
                        <Button key={item} title={item} onClick={clickHandler}/>
                    )
                )
            }
            <ul>{
                    outputs.map((item) => (
                        <li key={Math.random()}>{item}</li>
                    ))
                }
            </ul>
        </>
    );
}