import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import {
  Card,
  CardBody,
  Button,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },
export type dataType = {
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [posts, setPosts] = useState<dataType[]>([] as dataType[]);

  const apiEndPoint = "http://localhost:8000/posts";

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
      <h1 className={styles.header}>Board List</h1>
      <Card size="lg" style={{ width: "600px" }}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {posts.map(({ id, title, body }) => (
              <Box key={id} style={{ display: "flex", alignItems: "center" }}>
                <Heading
                  size="xs"
                  textTransform="uppercase"
                  style={{ marginRight: "5px" }}
                >
                  {id}
                </Heading>
                <Text fontSize="sm">{title}</Text>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
      <Link href="/addContent">
        <Button
          leftIcon={<FaPlus />}
          size="md"
          colorScheme="blue"
          variant="solid"
          style={{ margin: "25px 0px" }}
        >
          add content
        </Button>
      </Link>
    </div>
  );
}
