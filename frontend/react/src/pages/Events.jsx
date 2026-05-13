import ReactPlayer from "react-player"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Events.css"
import { ToastContainer, toast } from 'react-toastify';



const BACKENDURL = import.meta.env.BACKENDURL;

const ListVideos = () => {

    console.log(BACKENDURL)

    const [uploadedVideos, setUploadedVideos] = useState([])

    //Fetch images on component mount
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`${BACKENDURL}/api/videos/video-get`);
                setUploadedVideos(response.data);

            } catch (error) {
                toast.error('Error fetching videos:', error);
            }
        };
        fetchVideos();
    }, []);
    console.log(uploadedVideos)

    console.log(new Date().toLocaleDateString(), new Date().toLocaleTimeString() + " date")



    return (
        <div>
            <ToastContainer />

            <h5 className="videos-heading">Videos</h5>

            <div className="list-video-div">

                {uploadedVideos.map((video) => (
                    <div key={video._id} className="video-gallery-items">
                        <ReactPlayer url={video.videoUrl} controls={true} className="video" />
                        <div className="public-video-list">
                            <h2>Date: {video.createdAt}</h2>
                        </div>

                    </div>

                ))}


            </div>



        </div>
    )
}

export default ListVideos


