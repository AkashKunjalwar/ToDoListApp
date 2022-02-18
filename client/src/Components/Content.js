import React, { Fragment } from "react";
import ClearAllButton from "./Content/ClearAllButton";
import Input from "./Content/Input";
import Output from "./Content/Output";

const Content = () => {
  return (
    <Fragment>
      <Input />
      <Output />
      <ClearAllButton />
    </Fragment>
  );
};

export default Content;
