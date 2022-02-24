import React, { useState } from "react"

export function Increment() {
    const [count, setstate]=useState("");
    return (
        <div>

            <button type="button" onClick={() =>setstate("inc")}>increase</button>
            <h3>increase is the {count} </h3>
            <button onClick={() =>setstate("dec")}>decrease</button>
            <h3> decrease is the {count} </h3>
            
        </div>
    )
}


