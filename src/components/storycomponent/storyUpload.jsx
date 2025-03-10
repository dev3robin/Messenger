import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PreviewPortal from "./previewPortal";

const StoryUpload = ({ setStoryUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleReturn() {
    setStoryUpload(false);
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl);
      event.target.value = "";
    }
  }
  

  return ReactDOM.createPortal(
    <>
      <div className="storyUp">
        <div className="tNav">
          <div>
            <div>
              <button className="reBtn" onClick={handleReturn}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            </div>
            <div>Add to story</div>
          </div>
          <div>
            <div>
              <i className="fa-solid fa-layer-group"></i>
            </div>
            <div>
              <i className="fa-solid fa-circle-check"></i>
            </div>
          </div>
        </div>
        <div className="options">
          <div className="camera">
            <div>
              <i className="fa-solid fa-camera"></i>
            </div>
            <span>Camera</span>
          </div>
          <div className="text">
            <div>
              <i className="fa-solid fa-font"></i>
            </div>
            <span>Text</span>
          </div>
        </div>
        <div className="custom-import custom-button">
          <span className="label">
            <i className="fa-solid fa-plus"></i> Import From Gallery
          </span>
          <input
            className="import-field"
            type="file"
            name="name"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      </div>
      {selectedImage && (
        <PreviewPortal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>,
    document.getElementById("storyUpload")
  );
};

export default StoryUpload;
