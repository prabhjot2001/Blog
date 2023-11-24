"use client";

import React from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";
import { useState } from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = false;
  return (
    <>
      {status ? (
        <>
          <Link href="/login" className={styles.link}>
            Write blog
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>

          {status ? (
            <>
              <Link href="/login">Write blog</Link>
              <span className={styles.link}>Logout</span>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
