import { useState } from "react";
import styles from "../styles/Home.module.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Typography } from "@mui/material";
export default function CustomCarousel({
  project,
  info,
  slide,
  setSlide,
  category,
}) {
  function handleNext() {
    if (slide < info.description.length - 1) {
      setSlide(slide + 1);
    }
  }

  function handlePrev() {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  }

  function handleDot(ind) {
    setSlide(ind);
  }

  const dots = (
    <div style={{ textAlign: "center" }} className={styles.dots}>
      {info.description.map((desc, index) => (
        <span
          className={styles.dot}
          onClick={() => setSlide(index)}
          style={{
            backgroundColor: slide === index ? "black" : "gray",
          }}
          key={desc}
        ></span>
      ))}
    </div>
  );

  return (
    <>
      <div className={styles.slideshowContainer}>
        {info.description.map((desc, index) => (
          <div
            className={styles.fade}
            style={{
              display: slide === index ? "flex" : "none",
              justifyContent: "center",
            }}
            key={`${project}-${index}`}
          >
            {info.picTypes && info.picTypes[index] !== ".png" ? (
              <video controls className={styles.centerCropped}>
                <source
                  src={`/${category}/${project}/${project}${index + 1}${
                    info.picTypes[index]
                  }`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <a
                style={{ display: "flex" }}
                target="_blank"
                href={`/${category}/${project}/${project}${index + 1}.png`}
              >
                <img
                  src={`/${category}/${project}/${project}${index + 1}.png`}
                  className={styles.centerCropped}
                />
              </a>
            )}
          </div>
        ))}
        {info.description.length > 1 && (
          <>
            {dots}
            <a className={styles.prev} onClick={handlePrev}>
              <ChevronLeft className={styles.chevron} />
            </a>
            <a className={styles.next} onClick={handleNext}>
              <ChevronRight className={styles.chevron} />
            </a>
          </>
        )}
      </div>
    </>
  );
}
