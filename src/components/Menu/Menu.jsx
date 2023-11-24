import React from "react";
import styles from "./Menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "@/MenuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>

      <h2 className={styles.subTitle}>What's new</h2>
      <h1 className={styles.title}>Most popular</h1>
      <MenuPosts data={false} />

      <MenuCategories />

      <h2 className={styles.subTitle}>Choosen by the Author</h2>
      <h1 className={styles.title}>Editor's pick</h1>
      <MenuPosts data= {true} />
    </div>
  );
};

export default Menu;
