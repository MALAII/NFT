import './Gallery.css';

import { useState, useEffect } from 'react';

import { Lightbox } from "./Galleryanima";

import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

const Gallery = () => {

  const [selectedImg, setSelectedImg] = useState(null);

  const [uploadedImages, setUploadedImages] = useState([]);

  const [uploadedVideos, setUploadedVideos] = useState([]);

  const [activeTab, setActiveTab] = useState("images");

  const BACKENDURL = import.meta.env.BACKENDURL;




  useEffect(() => {

    // FETCH IMAGES

    const fetchImages = async () => {

      try {

        const response = await axios.get(
          `${BACKENDURL}/api/images/image-get`
        );

        const sortedImages = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setUploadedImages(sortedImages);

      }

      catch (error) {

        console.log(error);

        toast.error('Error fetching images');

      }

    };




    // FETCH VIDEOS

    const fetchVideos = async () => {

      try {

        const response = await axios.get(
          `${BACKENDURL}/api/videos/video-get`
        );

        const sortedVideos = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setUploadedVideos(sortedVideos);

      }

      catch (error) {

        console.log(error);

        toast.error("Error fetching videos");

      }

    };




    fetchImages();

    fetchVideos();

  }, []);




  // GROUP IMAGES

  const groupedImages = uploadedImages.reduce((acc, image) => {

    const title = image.title
      ? image.title.trim().toLowerCase()
      : "gallery";

    if (!acc[title]) {

      acc[title] = [];

    }

    acc[title].unshift(image);

    return acc;

  }, {});



  // GROUP VIDEOS

  const groupedVideos = uploadedVideos.reduce((acc, video) => {

    const title = video.title
      ? video.title.trim().toLowerCase()
      : "videos";

    if (!acc[title]) {

      acc[title] = [];

    }

    acc[title].push(video);

    return acc;

  }, {});




  return (

    <div>

      <ToastContainer />




      <div className='g-head'>

        <h1 style={{ textAlign: "center" }}>
          GALLERY
        </h1>

      </div>




      {/* TABS */}

      <div className="gallery-tabs">

        <button
          className={
            activeTab === "images"
              ? "active-tab"
              : ""
          }

          onClick={() => setActiveTab("images")}
        >
          Images
        </button>




        <button
          className={
            activeTab === "videos"
              ? "active-tab"
              : ""
          }

          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>

      </div>




      {/* IMAGES */}

      {

        activeTab === "images" &&

        Object.entries(groupedImages).map(([title, images]) => (

          <div
            key={title}
            className="gallery-section"
          >

            <h2 className='gallery-heading'>

              {

                title.charAt(0).toUpperCase() +
                title.slice(1)

              }

            </h2>




            <div className="gallery-container">

              {

                images.map((image) => (

                  <div
                    key={image._id}
                    className="gallery-item"

                    onClick={() => setSelectedImg(image)}
                  >

                    <img
                      src={image.url}
                      alt={image.title}
                      className="gallery-image"
                    />




                    <div className="image-overlay">

                      <p className="image-title">

                        Date:
                        {" "}
                        {

                          new Date(
                            image.createdAt
                          ).toLocaleDateString()

                        }

                      </p>

                    </div>

                  </div>

                ))

              }

            </div>

          </div>

        ))

      }




      {/* VIDEOS */}

      {

        activeTab === "videos" &&

        Object.entries(groupedVideos).map(([title, videos]) => (

          <div
            key={title}
            className="gallery-section"
          >

            <h2 className='gallery-heading'>

              {

                title.charAt(0).toUpperCase() +
                title.slice(1)

              }

            </h2>




            <div className="gallery-container">

              {

                videos.map((video) => (

                  <div
                    key={video._id}
                    className="gallery-item"
                  >

                    <video
                      src={video.videoUrl}
                      controls
                      className="gallery-video"
                    />

                  </div>

                ))

              }

            </div>

          </div>

        ))

      }




      {/* LIGHTBOX */}

      {

        selectedImg && (

          <Lightbox
            image={selectedImg}
            onClose={() => setSelectedImg(null)}
          />

        )

      }

    </div>

  );

};

export default Gallery;