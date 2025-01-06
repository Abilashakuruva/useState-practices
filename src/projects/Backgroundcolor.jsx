import React, { useState } from 'react'

const Backgroundcolor = () => {

    const [color, setColor] = useState("black");

    const colorHandler=(bgColor)=>{
        setColor(bgColor)
    }

    return (
        <div style={{backgroundColor:color, height:"100vh",width:"100vw"}}>
            <button onClick={()=>colorHandler("red")}>Red</button>
            <button onClick={()=>colorHandler("green")}>Green</button>
            <button onClick={()=>colorHandler("blue")}>Blue</button>
            <button onClick={()=>colorHandler("orange")}>Orange</button>
            <button onClick={()=>colorHandler("grey")}>Grey</button>
            <button onClick={()=>colorHandler("tomato")}>Tomato</button>
            <button onClick={()=>colorHandler("white")}>White</button>
            <button onClick={()=>colorHandler("pink")}>Pink</button>
            <button onClick={()=>colorHandler("lightgreen")}>Lightgreen</button>
        </div>
    )
}

export default Backgroundcolor
