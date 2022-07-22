import { Link } from "react-router-dom"
const Landing=()=>{
    return (
        <>
        <div className="Landing">
            <img className="landing_img" src="https://images.unsplash.com/photo-1655033116463-edffb5c38648?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
            <div className="name_button">
                <h2 className="name">10x Team 04</h2>
                <Link className="button" to='/postview'>Enter</Link>
            </div>
        </div>
        </>
    )
}
export default Landing