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
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import styles from "../styles/Home.module.css";
import { dataType } from "./index";

type itemProps = {
  allData: dataType[];
};

export default function BoardContentList({ allData }: itemProps) {
  console.log(allData);
  return (
    <>
      <h1 className={styles.header}>Board List</h1>
      <Card size="lg" style={{ width: "600px" }}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {allData.map((item) => (
              <Box key={''}>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
            ))}
          </Stack>
        </CardBody>
      </Card>
      <Button
        leftIcon={<FaPlus />}
        size="md"
        colorScheme="blue"
        variant="solid"
        style={{ margin: "25px 0px" }}
      >
        add content
      </Button>
    </>
  );
}
