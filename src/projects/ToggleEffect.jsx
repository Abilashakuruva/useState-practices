
import React,{useState} from 'react'

const ToggleEffect = () => {

    const[show,setShow]=useState(false)

    const showHandler=()=>{
        setShow(!show)
    }

  return (
    <div className="accsec">
        <div className="box1" onClick={showHandler}>
            <h2>What is React?</h2>
        </div>

{show &&     
        <div className="box2">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quae dolores tempore veniam! Quia, vel iure. Unde sint quisquam alias cupiditate molestias veniam quas quos voluptatum dolores? Enim porro quo, facere at recusandae atque asperiores ab sunt maxime, quos soluta ipsum minus provident! Reiciendis doloremque, commodi ratione provident ipsam ab.</p>
        </div>
}
    </div>
  )
}

export default ToggleEffect
