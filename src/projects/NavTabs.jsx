
import React,{useState} from 'react'

const NavTabs = () => {

    const [showTab,setShowTab]=useState(1)

    const tabHandler=(city)=>{
        setShowTab(city)

    }
  return (
    <div className="tabsec">
        <div className="navbar">
            <ul>
                <li onClick={()=>tabHandler(1)} className={showTab===1? "active": ""}>Delhi</li>
                <li onClick={()=>tabHandler(2)} className={showTab===2? "active": ""}>Mumbai</li>
                <li onClick={()=>tabHandler(3)} className={showTab===3? "active": ""}>Bangalore</li>
                <li onClick={()=>tabHandler(4)} className={showTab===4? "active": ""}>Hyderabad</li>
            </ul>
        </div>
        <div className="content">
            <div className={`tab1 ${showTab===1? "active": ""}`}>I am from Delhi</div>
            <div className={`tab2 ${showTab===2? "active": ""}`}>I am Mumbai</div>
            <div className={`tab3 ${showTab===3? "active": ""}`}>I am live in Bangalore</div>
            <div className={`tab4 ${showTab===4? "active": ""}`}>I am from Hyderabad</div>
        </div>
    </div>
  )
}

export default NavTabs
