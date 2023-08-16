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
    <div style={{ textAlign: "center" }} class={styles.dots}>
      {info.description.map((desc, index) => (
        <span
          class={styles.dot}
          onClick={() => setSlide(index)}
          style={{ backgroundColor: slide === index ? "black" : "" }}
        ></span>
      ))}
    </div>
  );

  return (
    <>
      <div class={styles.slideshowContainer}>
        {info.description.map((desc, index) => (
          <div
            class={styles.fade}
            style={{ display: slide === index ? "" : "none" }}
          >
            {info.picTypes && info.picTypes[index] !== ".png" ? (
              <video controls class={styles.centerCropped}>
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
                  class={styles.centerCropped}
                />
              </a>
            )}
          </div>
        ))}
        {info.description.length > 1 && (
          <>
            {dots}
            <a class={styles.prev} onClick={handlePrev}>
              <ChevronLeft className={styles.chevron} />
            </a>
            <a class={styles.next} onClick={handleNext}>
              <ChevronRight className={styles.chevron} />
            </a>
          </>
        )}
      </div>
    </>
  );
}
