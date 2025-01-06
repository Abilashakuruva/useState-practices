
import React,{useState} from 'react'

const BoxModal = () => {
    const[showImage,setShowImage]=useState(null)

    const imageHandler=(myImage)=>{
        setShowImage(myImage)
    }

    const closeHandler=()=>{
        setShowImage(null)
    }



  return (
    <div className="imagesec">
        <img src='Images/1.jpg'alt='' onClick={()=>imageHandler("Images/1.jpg")}/>
        <img src='Images/2.jpg'alt='' onClick={()=>imageHandler("Images/2.jpg")}/>
        <img src='Images/3.jpg'alt='' onClick={()=>imageHandler("Images/3.jpg")}/>
        <img src='Images/4.jpg'alt='' onClick={()=>imageHandler("Images/4.jpg")}/>
        <img src='Images/5.jpg'alt='' onClick={()=>imageHandler("Images/5.jpg")}/>
        <img src='Images/6.jpg'alt='' onClick={()=>imageHandler("Images/6.jpg")}/>
{
    showImage &&
    

        <div className="container">
            <div className="modal">
                <img src={showImage}alt=''/>
                <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    }       
    </div>
  )
}

export default BoxModal
