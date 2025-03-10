import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import ProfileCard from "../profileCard";

const StoryPortal = ({ userStory, setStoryPortal }) => {
  const stories = userStory.storyInfo.stories || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const indexRef = useRef(0);
  const timerRef = useRef(null);
  const [bgColors, setBgColors] = useState({
    top: "#ffffff",
    center: "#ffffff",
    bottom: "#ffffff",
  });
  const imgRef = useRef(null);
  useEffect(() => {
    if (stories.length === 0) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (indexRef.current < stories.length - 1) {
        indexRef.current += 1;
        setCurrentIndex(indexRef.current);
      } else {
        setStoryPortal(false);
      }
    }, 4000);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex, stories.length, setStoryPortal]);

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      indexRef.current = currentIndex + 1;
      setCurrentIndex(indexRef.current);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      indexRef.current = currentIndex - 1;
      setCurrentIndex(indexRef.current);
    }
  };

  function closePortal(){
   setStoryPortal(false);
  }
  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      img.crossOrigin = "Anonymous"; // Prevents CORS issues
      img.onload = () => extractColors(img);
    }
  }, [currentIndex]);

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

  if (stories.length === 0) return null;

  return ReactDOM.createPortal(
    <div className="storyG">
      {/* Progress Bar */}
      <div className="progress-bar-container">
        {stories.map((ele, index) => (
          <div
            key={index}
            className={`progress-bar ${index === currentIndex ? "active" : ""}`}
          ></div>
        ))}
      </div>

      {/* Top Nav*/}
      <div className="topNav">
        <div className="proInfo">
          <ProfileCard avatar={userStory.photos.profile} size="35px" />
          <div>
            <div>{userStory.userName}</div>
            <div>Storyinfo</div>
          </div>
        </div>
        <div className="proButton">
          <div><i className="fa-solid fa-ellipsis"></i></div>
          <div><i className="fa-solid fa-volume-high"></i></div>
          <div><button className="closeBtn" onClick={closePortal}>
            <i className="fa-solid fa-xmark"></i>
          </button></div>
        </div>
      </div>

      {/* Story Viewer */}
      <div className="stories" style={{ background: `linear-gradient(${bgColors.top}, ${bgColors.center}, ${bgColors.bottom})` }}>
        <button className="prev" onClick={handlePrev} disabled={currentIndex === 0}>
          ❮
        </button>
        <img ref={imgRef} src={stories[currentIndex]} width="100%" alt="Story" />
        <button className="next" onClick={handleNext} disabled={currentIndex === stories.length - 1}>
          ❯
        </button>
    </div>

      {/* Bottom Nav*/}
      <div className="bottomNav">
        <input type="text" placeholder="Send messages" />
        <div>❤️😀😁😆</div>
      </div>
    </div>,
    document.getElementById("storyPortal")
  );
};

export default StoryPortal;
