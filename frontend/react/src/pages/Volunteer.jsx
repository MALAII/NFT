import { useState } from 'react';
import axios from "axios";
import "./Volunteer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const BACKENDURL = import.meta.env.VITE_BACKENDURL;
const BACKENDURL = "https://nft-backend-9yzl.onrender.com";
console.log(BACKENDURL)

const Volunteer = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        city: "",
        message: ""
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        const { name, email, mobile, city, message } = data;

        console.log(name, email)
        
        if (!name || !email || !mobile || !city || !message) {
            return toast.warning("Please fill out all fields.");
        }

        try {
            const response = await axios.post(`${BACKENDURL}/api/become-volunteer`, {
                name,
                email,
                mobile,
                city,
                message
            });

            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                toast.success("Successfully Submitted!");
                setData({
                    name: "",
                    email: "",
                    mobile: "",
                    city: "",
                    message: ""
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="volunteerImages">
                <img src='images/volunteer.svg' alt='Volunteer' />
            </div>

            <h1 className='volunteer-head'>Volunteer</h1>

            <div className="volunteer">
                <div className="volunteer-questions">
                    <h2>Frequently Asked Questions</h2>
                    <h3>How to become a volunteer?</h3>
                    <p>
                        Kindly fill out the ‘volunteer form’ available on this page.
                        <br /> Thereafter our team will assist you further.
                    </p>
                    <h3>How much time do I have to devote as a volunteer?</h3>
                    <p>We always welcome contributions of any size or schedule!</p>
                </div>

                <div className="volunteerForm">
                    <h2>Fill the Volunteer Form</h2>
                    <form onSubmit={submitForm}>
                        <label>Your Name:</label>
                        <input
                            type='text'
                            name='name'
                            value={data.name}
                            onChange={handleChange}
                            required
                        />

                        <label>Your Email:</label>
                        <input
                            type='email'
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Your Mobile:</label>
                        <input
                            type='tel'
                            name='mobile'
                            value={data.mobile}
                            onChange={handleChange}
                            required
                        />

                        <label>Your City:</label>
                        <input
                            type='text'
                            name='city'
                            value={data.city}
                            onChange={handleChange}
                            required
                        />

                        <label>Message:</label>
                        <textarea
                            name='message'
                            value={data.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type='submit'>Submit Form</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Volunteer;
