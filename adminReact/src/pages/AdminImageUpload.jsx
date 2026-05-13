import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import uploadImage from "../assets/uploadimg.png"
import axios from 'axios';
import "./AdminImageUpload.css"

const BACKENDURL = import.meta.env.BACKENDURL;

const AdminImageUpload = () => {

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const [title, setTitle] = useState("");



  const handleFileChange = (e) => {

    const files = Array.from(e.target.files);

    setSelectedFiles(files);

    const previewUrls = files.map(file =>
      URL.createObjectURL(file)
    );

    setPreviews(previewUrls);

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!title) {
      return toast.error("Please enter title/category");
    }

    if (selectedFiles.length === 0) {
      return toast.error("Please select images");
    }

    setIsUploading(true);

    try {

      const formData = new FormData();

      formData.append('title', title);

      selectedFiles.forEach(file => {
        formData.append('images', file);
      });

      await axios.post(
        `${BACKENDURL}/api/images/image-post`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      toast.success("Images uploaded successfully");

      setSelectedFiles([]);
      setPreviews([]);
      setTitle("");

    } catch (error) {

      console.log(error);

      toast.error("Upload failed");

    } finally {

      setIsUploading(false);

    }

  };



  return (

    <div className="container">

      <ToastContainer />

      <h2
        className='img-upload-heading'
        style={{ color: "black", textAlign: "center" }}
      >
        Image Upload
      </h2>


      <form onSubmit={handleSubmit}>

        <div className="upload-container">

          <div className="image-description-box">

            <label>Title / Category</label>

            <input
              type='text'
              
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

          </div>


          <div className="form-group">

            <input
              className='upload-input'
              type="file"
              multiple
              onChange={handleFileChange}
              accept="image/*"
              id="fileInput"
              disabled={isUploading}
            />

            <label htmlFor="fileInput" className="upload-label">

              <img src={uploadImage} alt="upload" />

              <h3>
                Selected Images: {previews.length}
              </h3>

            </label>

          </div>

        </div>


        <div className="preview-container">

          {previews.map((preview, index) => (

            <div key={index} className="preview-item">

              <img
                src={preview}
                alt={`Preview ${index}`}
              />

            </div>

          ))}

        </div>


        <button
          type="submit"
          className="imageuploadbtn"
          disabled={isUploading}
        >
          {
            isUploading
              ? "Uploading..."
              : "Upload Images"
          }
        </button>

      </form>

    </div>

  );
};

export default AdminImageUpload;