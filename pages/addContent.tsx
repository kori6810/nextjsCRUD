import React from "react";
import {
  Card,
  CardBody,
  Button,
  Textarea,
  Input,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { Formik, Field, Form, FormikHelpers } from "formik";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export interface Values {
  id: number;
  title: string;
  body: string;
}
const AddContent = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Card size="lg" justify="center" style={{ width: "600px" }}>
        <Heading size="lg" style={{ textAlign: "center" }}>
          Adding New Content
        </Heading>
        <CardBody>
          <Formik
            initialValues={{
              id: 0,
              title: "",
              body: "",
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                if (values.id > 0) {
                  const response = axios.post(
                    "http://localhost:8000/posts",
                    values
                  );
                  response.then((res) => {
                    if (res.status === 201 || 200) {
                      router.push("/");
                    } else {
                    }
                  });
                } else {
                  alert(`"Please Enter Id"`);
                }
              }, 500);
            }}
          >
            <Form>
              <Heading className={styles.mb} size="sm">
                Id
              </Heading>
              <Field
                className={styles.mbL}
                id="id"
                name="id"
                placeholder="John"
                as={Input}
              />

              <Heading className={styles.mb} size="sm">
                Title
              </Heading>
              <Field
                className={styles.mbL}
                id="title"
                name="title"
                placeholder="Doe"
                as={Input}
              />

              <Heading className={styles.mb} size="sm">
                Body
              </Heading>
              <Field
                className={styles.mbL}
                id="body"
                name="body"
                placeholder="enter your text"
                as={Textarea}
              />

              {/* <Button
                leftIcon={<FaPlus />}
                size="md"
                colorScheme="blue"
                variant="solid"
                type="submit"
                className={styles.button}
              >
                add content
              </Button> */}

              <Button
                leftIcon={<FaPlus />}
                size="md"
                colorScheme="blue"
                variant="solid"
                style={{ margin: "25px 0px" }}
                type="submit"
              >
                add content
              </Button>
            </Form>
          </Formik>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddContent;
