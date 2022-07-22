// import Header from "./Header"
// import { useNavigate } from "react-router-dom"
// import axios from "axios";
// import { useState } from "react"
// import Moment from 'moment';
// const address="https://instaclone-server-10.herokuapp.com/post";
// // const heroku="https://insta-relica-server.addressapp.com/post"

// const Form=()=>{
//     // const date = Moment().format("DD MMM YYYY");
//     const [data,setdata]=useState({})
//     const [image,setimage]=useState('')
//     const navigate =useNavigate()
//     const hover={
//         backgroundColor:"#2d92d1",
//         color:"white",
//         height:"1.5rem",
//         border: "none"
//     }
//     const handlesubmit=(e)=>{
//         e.preventDefault()
//         let formData=new FormData()
//         formData.append('testimage',image)
//         formData.append('name',data.author)
//         formData.append('location',data.location)

        
//         formData.append('description',data.description)
//         formData.append('date',date)
//         axios.post(address,formData,{headers:{"Content-type":"multipart/form-data"},}).then((res)=>{
//             console.log("success")
//             navigate("/postview")
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }
//     function SubmitButton(){
//         if (Object.keys(data).length===3 && image){
//           return (
//             <div className="buttonbody">
//             <input className="submitbutton" type={"button"} value='Post' style={hover} onClick={handlesubmit}/>
//             </div>
//           )
//         } else {
//           return (
//             <div className="buttonbody">
//                 <button className="submitbutton" type="button" disabled>Post</button>
//             </div>
//           )
//         };
//       };
//     return(
//         <>
//         <Header/>
//         <div className="formtocenter">
//         <form className="formbody">
//         <span>
//             <input type={"file"} name="testimage" onChange={(e)=>{setimage(e.target.files[0])}}/>
//         </span>
//             <div className="nameloc">
//                 <input type={"text"} className='authloc' placeholder="Author" onChange={(e)=>{setdata({...data, author: e.target.value})}} />
//                 <input type={"text"} className='authloc' placeholder="Location" onChange={(e)=>{setdata({...data, location: e.target.value})}} />
//             </div>
//             <input type={"text"} placeholder="Description" onChange={(e)=> {setdata({...data, description: e.target.value})}} />
//             <br/>
//         <SubmitButton/>  
//         </form>
//         </div>

//         </>
//     )
// }
// export default Form;


import Logo from "./instaclone.png";
import Camera from "./camera.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Filebase64 from "react-file-base64"
import axios from "axios";
// import './form.css'

const Form_page=() =>{
    const navigate = useNavigate()
    const [data,setdata] = useState({author: "", location:"", image:"", description:""})
    const [image,setimage]=useState('')
    
    const inputhadler = (id)=> {
        setdata({...data,image:id})
    }
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        axios({
            url:"https://instaclone-server-10.herokuapp.com/uploads",
            method:"POST",
            headers :{
            },
            data : data
           }).then((post)=>{
                navigate("/postview")
           }).catch((err)=>{
            console.log(err)
           })
           console.log(data)
           setdata({author:"",location:"",description:"",image : ""})
    }
    
    
    return(
        <>
         <header>
            <div className="nav">
                <img src={Logo} alt="insta-logo"></img>
                <img id="camera" src={Camera} alt="camera"></img>

            </div>
        </header>
        <hr />
        
        <form onSubmit={handlesubmit}>
            <div className='form-box'>
            <h2>ADD POST</h2>
            <hr/>
           
            <Filebase64
                     type="file"
                     multiple={false}
                     onDone = {({base64})=> inputhadler(base64)}
                     id="file"/>
            
           
            <div className="part-2">
                <div>
                <input type="text"   placeholder="Author" onChange={(e)=>{setdata({...data, author: e.target.value})}} />
                <input type="text"  class="inline"  placeholder="Location" onChange={(e)=>{setdata({...data, location: e.target.value})}}/>
                </div>
                
            </div>
            <div className='part-3'>
                <input id="descrip" type="text"  placeholder="Description" onChange={(e)=> {setdata({...data, description: e.target.value})}}/>
            </div>
            <div className='part-4'>
                <button type="submit" id="b2"> Post</button>
          
            </div>
                
            </div>
            
        </form>
        </>
    )
}
export default Form_page;

