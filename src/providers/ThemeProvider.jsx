"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme, toggle } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  //this works like: you want to return, only when, the
  //component is mounted, So at first mounted is false 
  //but when this component loads, this useEffect runs 
  //first which makes mounted=true. This makes sure that 
  //your component loads correctly, and then it will 
  //return that wrapper of theme
  useEffect(()=>{
    setMounted(true)
  }, [])

  if(mounted){
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
