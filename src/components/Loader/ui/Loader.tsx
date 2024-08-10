"use client";

import React from "react";
import styles from "./Loader.module.scss";
import Image from "next/image";
import preloader from "./preloader.svg";

const Loader = () => {
  return (
    <div className={styles.overlay}>
      {/* <img className={styles.preloader} src={preloader.href} alt="load spinner" /> */}
      <Image
        src={preloader}
        alt={"load spinner"}
        loading="eager"
        placeholder="empty"
      ></Image>
    </div>
  );
};

export default Loader;
