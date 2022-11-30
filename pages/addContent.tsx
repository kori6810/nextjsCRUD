import React from "react";
import { itemProps } from "./list";

const AddContent = ({ allData }: itemProps) => {
  console.log(allData);

  return <div>this is add content component</div>;
};

export default AddContent;
