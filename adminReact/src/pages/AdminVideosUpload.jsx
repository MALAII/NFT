import ReactPlayer from "react-player";
import { useState } from "react";
import uploadImage from "../assets/uploadimg.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./AdminVideoUpload.css";

const BACKENDURL = import.meta.env.BACKENDURL;

const AdminVideosUpload = () => {

  const [selectedFiles, setSelectedFiles] = useState([]);

  const [previews, setPreviews] = useState([]);

  const [uploadedVideos, setUploadedVideos] = useState([]);

  const [isUploading, setIsUploading] = useState(false);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");




  const handleFileChange = (e) => {

    const files = Array.from(e.target.files);

    setSelectedFiles(files);

    // PREVIEW

    const previewUrls = files.map(
      file => URL.createObjectURL(file)
    );

    setPreviews(previewUrls);

  };





  const handleRemove = (removeIndex) => {

    const updateFiles =
      selectedFiles.filter(
        (_, index) => index !== removeIndex
      );

    const updatePreviewsFiles =
      previews.filter(
        (_, index) => index !== removeIndex
      );

    URL.revokeObjectURL(previews[removeIndex]);

    setSelectedFiles(updateFiles);

    setPreviews(updatePreviewsFiles);

  };





  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!title) {

      return toast.error("Please enter title/category");

    }

    if (selectedFiles.length === 0) {

      return toast.error("Please select video");

    }

    setIsUploading(true);

    try {

      const formData = new FormData();

      formData.append("title", title);

      selectedFiles.forEach(file => {

        formData.append("video", file);

      });




      const response = await axios.post(

        `${BACKENDURL}/api/videos/video-post`,

        formData,

        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

      );




      if (response.data.success === false) {

        return toast.error(response.data.message);

      }




      let newVideos = [];

      if (Array.isArray(response.data)) {

        newVideos = response.data;

      }

      else if (
        response.data.images &&
        Array.isArray(response.data.images)
      ) {

        newVideos = response.data.images;

      }

      else {

        newVideos = [response.data];

      }




      setUploadedVideos(prev => [

        ...newVideos,

        ...prev

      ]);




      // RESET

      setSelectedFiles([]);

      setPreviews([]);

      setDescription("");

      setTitle("");

      toast.success("Upload Successfully");

    }

    catch (error) {

      console.log(error);

      toast.error("Upload failed");

    }

    finally {

      setIsUploading(false);

    }

  };





  const handleDelete = async (id) => {

    try {

      const response = await axios.delete(
        `${BACKENDURL}/api/videos/video-delete/${id}`
      );

      setUploadedVideos(prev =>
        prev.filter(vid => vid._id !== id)
      );

      response.data.success
        ? toast.success(response.data.message)
        : toast.error(response.data.message);

    }

    catch (error) {

      toast.error('Delete failed');

    }

  };





  return (

    <div>

      <h1 className="vid-upload-heading">
        Admin upload videos page
      </h1>

      <ToastContainer />




      <form onSubmit={handleSubmit}>

        <div className="upload-container">




          {/* TITLE */}
<div className="image-description-box">

  <label>
    Title / Category
  </label>

  <input
    type="text"
    
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
  />

</div>
          




          {/* VIDEO INPUT */}

          <div className="form-group-vid">

            <input
              className='upload-input-vid'
              type="file"
              multiple
              onChange={handleFileChange}
              accept="video/*"
              id="fileInput"
              disabled={isUploading}
            />



            <label
              htmlFor="fileInput"
              className="upload-label-vid"
            >

              <img
                src={uploadImage}
                alt="upload"
              />

              <h3>

                {

                  previews.length === 1

                    ? "Selected video: " + previews.length

                    : "Selected videos: " + previews.length

                }

              </h3>

            </label>

          </div>




          <hr className='image-line-vid'></hr>

        </div>




        {/* PREVIEW */}

        <div className="preview-container-vid">

          {

            previews.map((preview, index) => (

              <div
                key={index}
                className="preview-item-vid"
              >

                <h3
                  onClick={() => handleRemove(index)}
                  className='remove-btn-vid'
                >
                  X
                </h3>




                <ReactPlayer
                  className="preview-item-video"
                  url={preview}
                  controls={true}
                />

              </div>

            ))

          }

        </div>




        <hr className='image-line-vid'></hr>




        <button
          type="submit"
          className="videouploadbtn"
          disabled={
            isUploading ||
            selectedFiles.length === 0
          }
        >

          {

            isUploading

              ? 'Please wait video is Uploading...'

              : 'Upload videos'

          }

        </button>

      </form>





      {/* UPLOADED VIDEOS */}

      <h3>
        Uploaded Videos ({uploadedVideos.length})
      </h3>




      <div className="Uploaded-videos-views">

        {

          uploadedVideos.map(videos => (

            <div
              key={videos._id}
              className="gallery-item-vid"
            >

              <button
                className="videos-remove-btn2"
                onClick={() => handleDelete(videos._id)}
                title="Delete video"
              >
                &times;
              </button>




              <ReactPlayer
                className='gallery-itemvideos'
                url={videos.videoUrl}
                controls={true}
              />




              <div className="uploaded-videos-date">

                <h2>
                  Title: {videos.title}
                </h2>

                <h3>
                  Date:
                  {" "}
                  {new Date(videos.createdAt).toLocaleDateString()}
                </h3>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

};

export default AdminVideosUpload;