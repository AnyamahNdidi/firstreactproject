import React, {useState} from 'react'
import AllDescriptions from '../compo/AllDescriptions/AllDescriptions'



import './Mainstyle.css'

function Main() {
    const [show, setShow] = useState(false);

    const clickEffect = ()=>{
        setShow((prev) => !prev)
    };
    return (
        <div className="container2">
            <div className="container2_wrapper">
                <button 
                  onClick={clickEffect}
                 className="container2_button">
                    Meet BDCL Student
                </button>
            </div>
           <AllDescriptions show ={show} setShow={setShow}/>
        </div>
    )
}

export default Main
