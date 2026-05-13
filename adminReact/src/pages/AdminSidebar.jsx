import { NavLink, useNavigate } from "react-router-dom"
import "./AdminSidebar.css"
import uploadimage from "../assets/uploadimage.png"
import uploadvideo from "../assets/uploadvideo.svg"
import list from "../assets/list.png"


import { useEffect } from "react"



const AdminSidebar = () => {

    const navigate = useNavigate()


    useEffect(() => {
        navigate("/Upload-Images")
    }, [])
    return (
        <div className="adminsidebar-firstdiv">

            <div className="adminsidebar-seconddiv">
                <NavLink className="adminsidebar-nav" to="/Upload-Images">
                    <img src={uploadimage} alt="image" /><p>Upload Images</p>
                </NavLink>
            </div>

            <div className="adminsidebar-seconddiv">
                <NavLink className="adminsidebar-nav" to="/List-Images">
                    <img src={list} alt="image" /><p>List Images</p>
                </NavLink>
            </div>

            <div className="adminsidebar-seconddiv">
                <NavLink className="adminsidebar-nav" to="/Upload-Videos">
                    <img src={uploadvideo} alt="image" /><p>Upload Videos</p>
                </NavLink>
            </div>

            <div className="adminsidebar-seconddiv">
                <NavLink className="adminsidebar-nav" to="/List-Videos">
                    <img src={list} alt="image" /><p>List Videos</p>
                </NavLink>
            </div>
             <div className="adminsidebar-seconddiv">
                <NavLink className="adminsidebar-nav" to="/Volunteer-datas">
                    <img src={list} alt="image" /><p>List Volunteer Datas</p>
                </NavLink>
            </div>



        </div>
    )
}

export default AdminSidebar
