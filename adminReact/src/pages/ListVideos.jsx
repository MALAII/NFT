import { useState, useEffect } from "react";

import axios from "axios";

import "./ListVideo.css";

import { ToastContainer, toast } from 'react-toastify';

import ReactPlayer from "react-player";

const BACKENDURL = import.meta.env.BACKENDURL;

const ListVideos = () => {

    const [uploadedVideos, setUploadedVideos] = useState([]);

    const [editingId, setEditingId] = useState(null);

    const [editedTitle, setEditedTitle] = useState("");




    // FETCH VIDEOS

    useEffect(() => {

        const fetchVideos = async () => {

            try {

                const response = await axios.get(
                    `${BACKENDURL}/api/videos/video-get`
                );

                setUploadedVideos(response.data);

            }

            catch (error) {

                toast.error("Error fetching videos");

            }

        };

        fetchVideos();

    }, []);




    // DELETE VIDEO

    const handleDelete = async (id) => {

        try {

            const response = await axios.delete(
                `${BACKENDURL}/api/videos/video-delete/${id}`
            );

            setUploadedVideos(prev =>
                prev.filter(video => video._id !== id)
            );

            response.data.success
                ? toast.success(response.data.message)
                : toast.error(response.data.message);

        }

        catch (error) {

            toast.error("Delete failed");

        }

    };




    // UPDATE VIDEO TITLE

    const handleUpdate = async (id) => {

        try {

            const response = await axios.put(

                `${BACKENDURL}/api/videos/video-update/${id}`,

                {
                    title: editedTitle
                }

            );

            if (response.data.success) {

                setUploadedVideos(prev =>

                    prev.map(video =>

                        video._id === id

                            ? {
                                ...video,
                                title: editedTitle
                            }

                            : video

                    )

                );

                toast.success("Video updated");

                setEditingId(null);

            }

        }

        catch (error) {

            toast.error("Update failed");

        }

    };




    return (

        <div>

            <ToastContainer />




            <h1 className="list-video-divh1">

                {

                    uploadedVideos.length === 1

                        ? "Total video: " + uploadedVideos.length

                        : "Total videos: " + uploadedVideos.length

                }

            </h1>




            <div className="list-video-div">

                {

                    uploadedVideos.map((video) => (

                        <div
                            key={video._id}
                            className="video-gallery-items"
                        >




                            {/* DELETE BUTTON */}

                            <button

                                className="video-remove-btn3"

                                onClick={() => handleDelete(video._id)}

                                title="Delete videos"

                            >

                                &times;

                            </button>




                            {/* VIDEO */}

                            <ReactPlayer

                                url={video.videoUrl}

                                controls={true}

                                className="video"

                                width="100%"

                                height="250px"

                            />




                            {/* TITLE SECTION */}

                            {

                                editingId === video._id ?

                                    (

                                        <>

                                            <input

                                                type="text"

                                                value={editedTitle}

                                                onChange={(e) =>
                                                    setEditedTitle(
                                                        e.target.value
                                                    )
                                                }

                                                className="video-edit-input"
                                            />




                                            <button

                                                className="video-save-btn"

                                                onClick={() =>
                                                    handleUpdate(video._id)
                                                }

                                            >

                                                Save

                                            </button>

                                        </>

                                    )

                                    :

                                    (

                                        <>

                                            <h2 className="video-title">

                                                {video.title}

                                            </h2>




                                            <button

                                                className="video-edit-btn"

                                                onClick={() => {

                                                    setEditingId(video._id);

                                                    setEditedTitle(video.title);

                                                }}

                                            >

                                                Edit

                                            </button>

                                        </>

                                    )

                            }




                            {/* DATE */}

                            <div className="list-videos-date">

                                <h2>

                                    Date:

                                    {" "}

                                    {video.createdAt}

                                </h2>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default ListVideos;