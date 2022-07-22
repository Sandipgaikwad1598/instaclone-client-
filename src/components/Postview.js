// import Header from "./Header"
// import axios from "axios"
// import { useState,useEffect } from "react"
// const address="https://instaclone-server-10.herokuapp.com/images";
// // const heroku="https://insta-relica-server.herokuapp.com/";

// const Postview =()=>{
//     const [data,setpost]=useState([])
//     useEffect(()=>{
//         axios.get(address)
//         .then((res)=>{setpost(res.data)})
//         .catch((err)=>{console.log(err)})
//     },[])
//     return(
//         <>
//         <Header/>
//         {
//             data.map((user,i)=>{
//                 const base64str=btoa(
//                     new Uint8Array(user.image.data.data).reduce(function(data,byte){
//                         return data+String.fromCharCode(byte)
//                     },"")
//                 );
//                 return (
//                     <div className='content' key={i}>
//                     <div >
//                         <header id='head'>
//                           <div  >
//                             <h3 className='name_loc'>{user.author}</h3>
//                             <h4 className='name_loc' style={{fontWeight:'100'}} >{user.location}</h4>
//                           </div>
//                             <h2 style={{margin:'0px'}}>...</h2>
//                         </header>
//                     </div>
//                     <div>
//                     <img className='image' src={`data:image/png;base64,${base64str}`} alt={"err"} />
//                     </div>
//                     <div id='footer'>
//                       <div id='footer_flex'>
//                         <div >
//                           <img className='like_share' src='https://p.kindpng.com/picc/s/169-1694281_heart-symbol-computer-icons-heart-icon-instagram-png.png' alt=''></img>
//                           <img className='like_share' src='https://cdn0.iconfinder.com/data/icons/simple-line-design/100/Fast_delivery-512.png' alt=''></img>
//                         </div>
//                         <h6 style={{margin:'1px'}} className='date'>{user.date}</h6>
//                       </div>
//                       <h6 style={{margin:'10px 4px'}} className='likes'>{user.like} likes</h6>
//                       <h4 style={{margin:'10px 4px'}}>{user.description}</h4>
//                     </div>
//                     </div>
//                 )


//             })
//         }
        
//         </>
//     )
// }
// export default Postview


import Logo from "./instaclone.png";
import Camera from "./camera.png";
import { useEffect, useState } from "react";

import axios from "axios"
// import "./post_view.css";


const PostView = () => {
    const [data,setpost]=useState([])
    useEffect(()=>{
        axios.get("https://instaclone-server-10.herokuapp.com/images").then((imagedata)=>{
            let data = imagedata.data.images.reverse();
            //console.log(data[0])
            setpost(data)
            
        })
        .catch((err)=>{console.log(err)})
    },[])
    
    return (
        <>
       
        <div className="container">
                <header>
                    <div className="nav">
                        <img src={Logo} alt="insta-logo"></img>
                        <a href="./form"><img id="camera" src={Camera} alt="camera"></img></a>
                        

                    </div>
                </header>
                <hr />
                <div>
                    {data.map((user,i)=>{
                         return (
                                <div className="body">
                                    <div className="card">
                                        <div className="user-info" key={i}>
                                            <h3>{user.author}</h3>
                                            <span className="location">{user.location}</span>
                                            <span className="dot"><h1>...</h1></span>
                                        </div>
                                        <div className="user-image">
                                            <img className="post" src={user.image} alt="user defined "></img>
                                        </div>
                                        <div className="cont1">
                                        <div className="heart">
                                            <img  id="heart-image" src="/heart.png" alt="user defined"></img>
                                            <img  id="share-image" src="/share.png" alt="user defined"></img>
                                            {/* <span className="grid" id="date" >{user.date}</span> */}
                                        </div>
                                        <div className="user-meta">
                                            <span>{user.date}</span>
                                        </div>
                                        </div>
                                        <div className="user-likes">
                                            {user.likes} likes
                                        </div>
                                        <div className="user-description">
                                            {user.description}
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default PostView;