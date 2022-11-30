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
  const [posts, setPosts] = useState<dataType[]>([] as dataType[]);
  const [addPost, setAddPost] = useState(false);

  const apiEndPoint = "http://localhost:8000/posts";

  // console.log(apiEndPoint);
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);
  //////////api papka ochamz unga axios commandalar yozamz, data olamz kere joyda chaqirib ishaltamz. state keremasga oxshavoti

  return (
    <div className={styles.container}>
      <BoardContentList allData={posts} />
    </div>
  );
}
