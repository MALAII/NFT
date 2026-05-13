import "./AdminNavbar.css"
import nationImages from "../assets/nationIma.png"

const AdminNavbar = ({ setToken }) => {



    return (
        <div>
            {/* admin navbar div */}

            <div className="admin-navbar-container">
                <div className="admin-image">
                    <img src={nationImages} alt="images" />

                </div>

                <div className="admin-heading">
                    <h1>Admin panel</h1>
                </div>

                <div className="admin-logout-btn">
                    <button className="but" onClick={() => setToken("")}>Logout</button>
                </div>

            </div>



        </div>
    )
}

export default AdminNavbar
