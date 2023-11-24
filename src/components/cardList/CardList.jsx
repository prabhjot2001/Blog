import React from "react";
import Pagination from "../pagination/Pagination";
import styles from "./CardList.module.css";
import Image from "next/image";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
