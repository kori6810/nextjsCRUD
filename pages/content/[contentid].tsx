import { useRouter } from "next/router";
import {
  Card,
  CardBody,
  Button,
  Textarea,
  Input,
  Heading,
  Icon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { Formik, Field, Form, FormikHelpers, useFormik } from "formik";
import { useRecoilState } from "recoil";
import { dataType, postAtom } from "..";
import styles from "../../styles/Home.module.css";
import { Values } from "../addContent";
import { useEffect, useState } from "react";
const Content = () => {
  const router = useRouter();
  const {
    query: { contentid },
  } = router;
  const [post, setPost] = useRecoilState(postAtom);
  const [selectedContent, setSelectedContent] = useState<any>();

  const formik = useFormik({
    initialValues: {
      id: selectedContent?.id,
      title: selectedContent?.title,
      body: selectedContent?.body,
    },
    enableReinitialize: true,
    onSubmit: () => {
      if (formik.values.id > 0) {
        const response = axios.post(
          "http://localhost:8000/posts",
          formik.values
        );
        response.then((res) => {
          if (res.status === 201 || 200) {
            router.push("/");
          } else {
          }
        });
      }
    },
  });
  useEffect(() => {
    console.log(post, "post");
    const resContent = post.find(
      (val: dataType) => val.id === Number(contentid)
    );

    setSelectedContent(resContent);
  }, []);

  return (
    <div className={styles.container}>
      <Card size="lg" justify="center" style={{ width: "600px" }}>
        <Heading size="lg" style={{ textAlign: "center" }}>
          Adding New Content
        </Heading>
        <CardBody>
          <form>
            <Heading className={styles.mb} size="sm">
              Id
            </Heading>
            <Input
              className={styles.mbL}
              id="id"
              name="id"
              placeholder="John"
              value={formik?.values.id}
              onChange={formik.handleChange}
            />

            <Heading className={styles.mb} size="sm">
              Title
            </Heading>
            <Input
              className={styles.mbL}
              id="title"
              name="title"
              placeholder="Doe"
              value={formik.values.title}
              onChange={formik.handleChange}
            />

            <Heading className={styles.mb} size="sm">
              Body
            </Heading>
            <Input
              className={styles.mbL}
              id="body"
              name="body"
              placeholder="enter your text"
              onChange={formik.handleChange}
              value={formik.values.body}
            />
            <Button
              size="md"
              variant="solid"
              style={{ margin: "25px 25px" }}
              onClick={() => router.back()}
              // type="submit"
            >
              Back
            </Button>
            <Button
              size="md"
              colorScheme="red"
              variant="solid"
              style={{ margin: "25px 25px" }}
              // type="submit"
            >
              Delete
            </Button>
            <Button
              size="md"
              colorScheme="green"
              variant="solid"
              style={{ margin: "25px 0px" }}
              type="submit"
            >
              Save
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};
export default Content;
