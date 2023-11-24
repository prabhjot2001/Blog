import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>


      <h1 className={styles.heading}>
        <b className={styles.bold}>Elevate Your Knowledge:</b> A Profound Exploration of Industry
        Insights and Expert Perspectives on Our Premier Blog Platform.
      </h1>


      <div className={styles.post}>


        <div className={styles.imgContainer}>
          <Image src="/road.jpg" alt="" fill className={styles.image} />
        </div>


        <div className={styles.textContainer}>

          <h1 className={styles.postTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            
          </h1>

          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque
            similique aperiam ullam dolor in quam cupiditate ratione eum placeat
            quidem id inventore molestias omnis consectetur facere, ea aliquid
            excepturi.
          </p>

          <button className={styles.button}>Read more</button>
          
        </div>
      </div>
    </div>
  );
};

export default Featured;
