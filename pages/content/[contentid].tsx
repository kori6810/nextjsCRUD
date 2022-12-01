import { useRouter } from "next/router";

const Content = () => {
  const router = useRouter();
  const primaryKey = () => {
    console.log(router);
  };
  primaryKey();

  return <p>dsdsdsds</p>;
};
export default Content;
