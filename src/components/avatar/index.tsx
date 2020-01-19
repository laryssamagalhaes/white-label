import React from "react";

import styles from "./index.module.css";

type PropsType = {
  src: string;
  alt: string;
};

const Avatar = ({ src, alt }: PropsType) => {
  return <img src={src} alt={alt} className={styles.avatar} />;
};

export default Avatar;
