import React from "react";
import Button from "./button";

export default function (){
    const items = ['Apple', 'Banana', 'Cherry'];

    return(
        <>
            <h2>This is body heading</h2>
            <p>This is body paragraph</p>
            {
                items.map((item) => (
                            <Button key={item} title={item} />
                        )
                    )
                }
        </>
    );
}