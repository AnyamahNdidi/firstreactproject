import React, {useState} from 'react'
import './compocss.css'
import Description from './second/description'

function CenterButton(){
    const [show, setShow] = useState(false);

    const openDesc = ()=>{
        setShow((prev) => !prev)
    };
    return(
        <div className ="container">
        

            
            <div className="container_wrapper">
                <button 
                onClick={openDesc}
                className="container-button">Meet Peter</button>
            </div>
            <Description show ={show} setShow={setShow}/>
            
        </div>
    )
}

export default CenterButton;