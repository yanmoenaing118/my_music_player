import React from "react";
import styles from "./Particles.module.scss";

export default function Particles() {
  return (
    <div className={styles.AnimationWrapper}>
      <div className={`${styles.particle} ${styles.particleOne}`}></div>
      <div className={`${styles.particle} ${styles.particleTwo}`}></div>
      <div className={`${styles.particle} ${styles.particleThree}`}></div>
      <div className={`${styles.particle} ${styles.particleFour}`}></div>
    </div>
  );
}
