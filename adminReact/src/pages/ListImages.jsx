import { useState, useEffect } from "react";
import axios from "axios";
import "./list.css";
import { ToastContainer, toast } from 'react-toastify';

const BACKENDURL = import.meta.env.BACKENDURL;

const ListImages = () => {

  const [uploadedImages, setUploadedImages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");



  // FETCH IMAGES

  useEffect(() => {

    const fetchImages = async () => {

      try {

        const response = await axios.get(
          `${BACKENDURL}/api/images/image-get`
        );

        setUploadedImages(response.data);

      } catch (error) {

        toast.error("Error fetching images");

      }

    };

    fetchImages();

  }, []);




  // DELETE IMAGE

  const handleDelete = async (id) => {

    try {

      const response = await axios.delete(
        `${BACKENDURL}/api/images/image-delete/${id}`
      );

      setUploadedImages(prev =>
        prev.filter(img => img._id !== id)
      );

      response.data.success
        ? toast.success(response.data.message)
        : toast.error(response.data.message);

    } catch (error) {

      toast.error("Delete failed");

    }

  };




  // START EDIT

  const handleEdit = (image) => {

    setEditingId(image._id);
    setEditedTitle(image.title || "");

  };




  // SAVE TITLE

  const handleSave = async (id) => {

    try {

      await axios.put(
        `${BACKENDURL}/api/images/image-update/${id}`,
        {
          title: editedTitle
        }
      );

      setUploadedImages(prev =>
        prev.map(img =>
          img._id === id
            ? { ...img, title: editedTitle }
            : img
        )
      );

      toast.success("Title updated");

      setEditingId(null);

    } catch (error) {

      toast.error("Update failed");

    }

  };




  return (

    <div>

      <ToastContainer />

      <h1 className="list-image-divh1">

        {
          uploadedImages.length === 1
            ? "Total image: " + uploadedImages.length
            : "Total images: " + uploadedImages.length
        }

      </h1>



      <div className="list-image-div">

        {

          uploadedImages.map((image) => (

            <div
              key={image._id}
              className="image-gallery-items"
            >




              {/* DELETE BUTTON */}

              <button
                className="image-remove-btn3"
                onClick={() => handleDelete(image._id)}
                title="Delete image"
              >
                &times;
              </button>




              {/* IMAGE */}

              <img src={image.url} alt="" />




              {/* TITLE */}

              <div className="image-title-edit">

                {
                  editingId === image._id ? (

                    <>

                      <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) =>
                          setEditedTitle(e.target.value)
                        }
                        placeholder="Enter title"
                      />

                      <button
                        className="save-btn"
                        onClick={() => handleSave(image._id)}
                      >
                        Save
                      </button>

                    </>

                  ) : (

                    <>

                      <h3>
                        {image.title || "No Title"}
                      </h3>

                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(image)}
                      >
                        Edit
                      </button>

                    </>

                  )
                }

              </div>




              {/* DATE */}

              <div className="list-images-Date">

                <h4>
                  Date : {image.createdAt}
                </h4>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

};

export default ListImages;