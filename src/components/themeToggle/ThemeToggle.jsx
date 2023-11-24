"use client";

import React, { useContext } from "react";
import styles from "./ThemeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "#ffffff" }
          : { backgroundColor: "#1d1d1d" }
      }
    >
      <Image src="/moon.png" alt="moon" height={14} width={14} />
      
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#1c1c1c" }
            : { right: 1, background: "#fff" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" height={14} width={14} />
    </div>
  );
};

export default ThemeToggle;
