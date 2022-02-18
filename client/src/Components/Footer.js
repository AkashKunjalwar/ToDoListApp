import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return <p className={styles.footer}>Copyright ToDoList App @ {year}</p>;
};

export default Footer;
