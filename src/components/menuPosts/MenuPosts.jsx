import React from "react";
import styles from "./MenuPosts.module.css";
import Image from "next/image";
import Link from "next/link";

const MenuPosts = (props) => {
  return (
    <div className={styles.items}>
      {/* ############## MENU LINKS ############# */}

      <Link href="/" className={styles.item}>
        {props.data && (
          <div className={styles.imageContainer}>
            {<Image src="/travel2.jpg" fill className={styles.image} />}
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>

          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}>14.Nov.2023</span>
          </div>
        </div>
      </Link>
      {/* ############## MENU LINKS ############# */}

      <Link href="/" className={styles.item}>
        {props.data && (
          <div className={styles.imageContainer}>
            <Image src="/food.jpg" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>

          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}>14.Nov.2023</span>
          </div>
        </div>
      </Link>

      {/* ############## MENU LINKS ############# */}

      <Link href="/" className={styles.item}>
        {props.data && (
          <div className={styles.imageContainer}>
            <Image src="/coding.jpg" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>

          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}>14.Nov.2023</span>
          </div>
        </div>
      </Link>

      {/* ############## MENU LINKS ############# */}

      <Link href="/" className={styles.item}>
        {props.data && (
          <div className={styles.imageContainer}>
            <Image src="/fashion2.jpg" fill className={styles.image} />
          </div>
        )}

        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>

          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}>14.Nov.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
