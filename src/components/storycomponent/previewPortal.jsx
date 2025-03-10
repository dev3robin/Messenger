import React, { useState,useRef,useEffect } from "react";
import ReactDOM from "react-dom";

const PreviewPortal = ({ selectedImage, setSelectedImage }) => {
    const [bgColors, setBgColors] = useState({
      top: "#ffffff",
      center: "#ffffff",
      bottom: "#ffffff",
    });
    const imgRef = useRef(null);
    useEffect(() => {
      const img = imgRef.current;
      if (img) {
        img.crossOrigin = "Anonymous"; // Prevents CORS issues
        img.onload = () => extractColors(img);
      }
    }, []);
  
    const extractColors = (img) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
  
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
  
      const getColor = (x, y) => {
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
      };
  
      const topColor = getColor(img.width / 2, 20); // 10px from top
      const centerColor = getColor(img.width / 2, img.height / 2); // Center
      const bottomColor = getColor(img.width / 2, img.height - 20); // 10px from bottom
  
      setBgColors({ top: topColor, center: centerColor, bottom: bottomColor });
    };
  return ReactDOM.createPortal(
    <div className="preview-window">
      <div className="top">
        <button className="retBtn"onClick={() => setSelectedImage(null)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="settings">
          <button>
          <i class="fa-solid fa-feather"></i>
          </button>
          <button>
            <i className="fa-solid fa-font"></i>
          </button>
          <button>
            <i className="fa-solid fa-face-smile"></i>
          </button>
          <button>
            <i className="fa-solid fa-music"></i>
          </button>
          <button>
            <i className="fa-solid fa-sliders"></i>
          </button>
          <button>
            <i className="fa-solid fa-download"></i>
          </button>
        </div>
      </div>
      <div className="preview-img" style={{ background: `linear-gradient(${bgColors.top}, ${bgColors.center}, ${bgColors.bottom})` }}>
        <img ref={imgRef}src={selectedImage} alt="Preview" />
      </div>
      <div className="bottom">
        <div>
          <button className="settingsIcon"><i className="fa-solid fa-gear"></i><span>Settings</span></button>
        </div>
        <div>
          <button  className="send">
            <span>Share Now</span>
            <span><i class="fa-solid fa-share"></i></span>
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("previewPortal")
  );
};

export default PreviewPortal;
