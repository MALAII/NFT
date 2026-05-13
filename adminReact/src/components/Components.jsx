import { Route, Routes } from 'react-router-dom'
import './componet.css'
import Login from '../pages/Adminlogin'
import AdminNavbar from '../pages/AdminNavbar'
import AdminSidebar from '../pages/AdminSidebar'
import AdminImageUpload from '../pages/AdminImageUpload'
import ListVideos from '../pages/ListVideos'
import { useEffect, useState } from 'react'
import AdminVideosUpload from '../pages/AdminVideosUpload'
import ListImages from "../pages/ListImages"
import ScrollToTop from '../pages/Scroll'
import VolunteersDatasList from '../pages/VolunteersDatasList'




const Components = () => {


    const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "")
    console.log(token + "hkkkkkkkkkkkkkkkkk")

    useEffect(() => {

        localStorage.setItem("token", token)

    }, [token])

    return (
        <div>

            <ScrollToTop />
            {token === "" ? <Login setToken={setToken} /> :

                <>
                    <AdminNavbar setToken={setToken} />
                    <hr></hr>

                    <div className="admin-sidebar-collumn">

                        <AdminSidebar />

                        <div className='admin-side1'>

                            <Routes>
                                <Route path='/Upload-images' element={<AdminImageUpload />} />
                                <Route path='/List-Images' element={<ListImages />}></Route>
                                <Route path='/Upload-videos' element={<AdminVideosUpload />} />
                                <Route path='/List-videos' element={<ListVideos/>}/>
                                <Route path='/Volunteer-datas' element={<VolunteersDatasList/>}/>
                            </Routes>

                        </div>

                    </div>
                </>
            }

        </div>
    )
}

export default Components
