import React from "react";
import Link from "next/link";
import styles from "./MenuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          Style
        </Link>

        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          Food
        </Link>

        <Link
          href="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          Fashion
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travel}`}
        >
          Travel
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.coding}`}
        >
          Coding
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture}`}
        >
          Culture
        </Link>
      </div>
    </div>
  );
};

export default MenuCategories;
