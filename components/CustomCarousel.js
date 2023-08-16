import { useState } from "react";
import styles from "../styles/Home.module.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Typography } from "@mui/material";
export default function CustomCarousel({ project, info, slide, setSlide }) {
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
            <img
              src={`/${project}/${project}${index + 1}.png`}
              class={styles.centerCropped}
            />
          </div>
        ))}
        {dots}

        <a class={styles.prev} onClick={handlePrev}>
          <ChevronLeft className={styles.chevron} />
        </a>
        <a class={styles.next} onClick={handleNext}>
          <ChevronRight className={styles.chevron} />
        </a>
      </div>
    </>
  );
}
