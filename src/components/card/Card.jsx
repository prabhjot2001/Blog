import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>

      <div className={styles.imageContainer}>
        <Image src="/post.jpg" fill className={styles.image}/>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>14.Nov.2023 - </span>
          <span className={styles.category}>Culture</span>
        </div>
       
       <Link href="/">
        <h1>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</h1>
       </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a
          rem repudiandae ut quos suscipit!
        </p>
        <Link href="/"  className={styles.link}>Read more</Link>
      </div>
    </div>
  );
};

export default Card;
