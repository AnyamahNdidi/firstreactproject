import React from 'react'


import fake from 'faker'


const Firctcom = ()=>{
    return (
        <div>
            <div className="comment">
    <a className="avatar">
      <img src="/images" src= {fake.image.avatar()}/>
    </a>
    <div className="content">
      <a className="author">Matt</a>
      <div className="metadata">
        <span className="date">Today at 5:42PM</span>
      </div>
      <div className="text">
        How artistic!
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Firctcom;

