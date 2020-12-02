import React from "react"
import fake, { image } from 'faker'
import './thirdcss.css'


const Thirdcom = ()=>{
    return(

        <div className="container">
            <div className="conatiner_img">
               <a href ='/'  className ="continer_avater">
                   <img src ={fake.image.avatar()}/>
                </a> 

            </div>
            <div className = "container_content">
                <div className ="container_nameDate">
                    <div className ="container_name">Edwin</div>
                    <div className ="container_data">Today sat 2</div>

                </div>
                <div className="container_comReply">
                    <div className ="container_com">this is my coment</div>
                    <div className ="container_reply">Reply</div>
                </div>
    
            </div>

        </div>

    )
}

export default Thirdcom;