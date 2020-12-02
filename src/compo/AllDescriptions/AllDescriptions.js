import React, { useState, useEffect} from 'react'
import './AllDescriptionstyle.css'
import img from '../../component/second/img/CodeLab.jpg'
import {axios} from '../../axios'


function AllDescriptions({show, setShow}) {
    const [text, setText] = useState({})
    const [FormData, setFormData] = useState([])

    const handleChange = (e) =>{
        setText({...text, [e.target.name]:e.target.value})
    }
    const getData = async()=>{
        const result = await axios.get('/').catch((err)=>{
            console.log(err)
        });
        console.log(result);
        if(result && result.data){
            return setFormData(result.data)
        }
    }
    const postData = async() => {
        const result = await axios.post('/', text).catch((err) =>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getData()
    }, []);
    return (
        <>
        {show ? 
    <div className ="container3">
       <div className="container3_wrapper">
           
         <img className="container3_img" 
            src ={img}
         />
         
         <div className="container3_wrapperText">
           <h2>List Of Student</h2>
           <div>
            {
               FormData.map((event, i)=>(
                <div key ={event.i}>
                <p>{event.name}</p>
                
                <p></p>
                </div>
               ))
               }  

           </div>

           <div className="container3_wrapperbuttonContainer">
           <div
            className = "container3_wrapperbutton"
            onClick={()=>{
                setShow((prev) => !prev)
            }}
           >x</div>
           </div>
           <div className="container3_wrapperFormContainer">
           <form 
           onSubmit={postData}
           className="container3_wrapperForm">
               <input
               className="container3_wrapperInputForm"
               type="text"
               name ="name"
               onChange = {handleChange}
               placeholder="submit your name"
               />
               <button
               //onClick ={(e) => e.preventDefault()}
               className="container3_wrapperFormSubmit"
               >
                   {""}submit {""}</button>
           </form>
       </div>
       </div>
       </div>
       
       

    </div>:null}</>
    )
}

export default AllDescriptions
