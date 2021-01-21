import React from "react";
import styles from "./Particles.module.scss";

export default function Particles(props) {
  console.log(props);
  console.log("What is your name?");

  return (
    <div className={styles.AnimationWrapper}>
      <div className={`${styles.particle} ${styles.particleOne}`}></div>
      <div className={`${styles.particle} ${styles.particleTwo}`}></div>
      <div className={`${styles.particle} ${styles.particleThree}`}></div>
      <div className={`${styles.particle} ${styles.particleFour}`}></div>
    </div>
  );
}
