import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Flex,
  defineStyle,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { dataType } from "./index";

export type itemProps = {
  allData: dataType[];
};
const underline = defineStyle({
  margin: "5",
});

export default function BoardContentList({ allData }: itemProps) {
  console.log(allData);
  return (
    <>
      <h1 className={styles.header}>Board List</h1>
      <Card size="lg" style={{ width: "600px" }}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {allData.map(({ id, title, body }) => (
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
    </>
  );
}
