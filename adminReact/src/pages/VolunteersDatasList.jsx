

import axios from "axios";
import { useEffect, useState } from "react";
import "./VolunteersPage.css";
import { ToastContainer, toast } from "react-toastify";
const BACKENDURL = import.meta.env.VITE_BACKENDURL;

const VolunteersPage = () => {

    const [volunteerData, setVolunteerData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchVolunteerDatas = async () => {
        try {
           const response = await axios.get(
   `${BACKENDURL}/api/volunteer/volunteer-datas-get`
);
            setVolunteerData(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching volunteer data:", error);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this volunteer?"
        );
        if (!confirmDelete) return;

        try {
            const data = await axios.delete(
                `${BACKENDURL}/api/volunteer/volunteer-delete/${id}`
            );
            setVolunteerData((prev) =>
                prev.filter((volunteer) => volunteer._id !== id)
            );

            data.success ? toast.success(data.data.message) : toast.error(data.data.message)

        } catch (error) {
            toast.error("Delete failed: " + error.message);
        }
    };

    useEffect(() => {
        fetchVolunteerDatas();
    }, []);

    return (
        <div className="glass-page">
         

                <div className="glass-overlay"></div>
   <ToastContainer></ToastContainer>
                <div className="glass-container">
                    <h1 className="glass-title">Volunteers Dashboard</h1>

                    {loading ? (
                        <p className="glass-loading">Loading volunteers...</p>
                    ) : volunteerData.length === 0 ? (
                        <p className="glass-empty">No Volunteers Found</p>
                    ) : (
                        <div className="glass-grid">
                            {volunteerData.map((volunteer) => (
                                <div key={volunteer._id} className="glass-card">
                                    <div className="glass-header">
                                        <h3>{volunteer.name}</h3>
                                        <span className="glass-role">
                                            {volunteer.role}
                                        </span>
                                    </div>

                                    <div className="glass-body">
                                        <p><span>Email:</span> {volunteer.email}</p>
                                        <p><span>Mobile:</span> {volunteer.mobile}</p>
                                        <p><span>City:</span> {volunteer.city}</p>
                                        <p><span>Message:</span> {volunteer.message}</p>
                                        <p className="glass-date">
                                            Joined: {new Date(volunteer.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>

                                    <div className="glass-actions">
                                        <button
                                            className="glass-delete"
                                            onClick={() => handleDelete(volunteer._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                   
                </div>
            
        </div>

    );
};

export default VolunteersPage;