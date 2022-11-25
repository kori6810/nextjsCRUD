import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

import styles from "../styles/Home.module.css";

export default function BoardContentList() {
  return (
    <>
      <UnorderedList className={styles.list} spacing="30px">
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
      <Button colorScheme="blue">Button</Button>
    </>
  );
}
