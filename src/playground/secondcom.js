import fake from 'faker'
import React from 'react'

import './style.css'

function Secondcom(props){

    return(
        <div className="container">
            <div className='container_image'>
                <a href="/" className="containerAveter">
                <img alt="pic" src ={fake.image.avatar()}/>
                </a>
                
            </div>
            <div className='container_content'>
                <div className = 'container_contentNameDate'>
             <div className="contentName">{props.name}</div>
                  <div className="contentDate">{props.date} </div>
                </div>
                <div className ='container_contentComRe'>
                <div className="contentComment">How artistic!</div>
                <div className="contentReply">Reply</div>

                </div>
            </div>

        </div>
    )
}
export default Secondcom;