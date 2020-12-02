import React from 'react'
import './descss.css'
import img from '.././second/img/vvv.jpg'

function Description({show, setShow}){
    return(
    <>
        {show ? 
    <div className ="container1">
       <div className="container1_wrapper">
           
         <img className="container1_img" 
           src={img}
         />
             
       </div>

    </div>:null}</>
    )
}

export default Description;