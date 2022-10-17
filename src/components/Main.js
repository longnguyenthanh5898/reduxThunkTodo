import AddTask from "./AddTask";

import ListTask from "./ListTask";

import React, { Fragment } from "react";
import Heading from "./Heading";

const Main = () => {
  return (
    <Fragment>
      <Heading />
      <ListTask />
    </Fragment>
  );
};

export default Main;
