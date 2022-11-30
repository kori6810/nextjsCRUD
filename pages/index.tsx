import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import BoardContentList from "./list";
import axios from "axios";

// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },
export type dataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [posts, setPost] = useState<dataType[]>([] as dataType[]);

  const apiEndPoint =
    "https://my-json-server.typicode.com/typicode/demo/kori6810/nextjsCRUD";
  // const apiEndPoint = [
  //   {
  //     userId:1,
  //     id:1,
  //     title:'heey'
  //     body:'body'
  //   }
  // ];
  console.log(apiEndPoint);
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
    };
    getPosts();
  }, []);
  return (
    <div className={styles.container}>
      <BoardContentList allData={posts} />
    </div>
  );
}
