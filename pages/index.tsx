import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BoardContentList from "./list";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Board List</h1>
      <BoardContentList />
    </div>
  );
}
