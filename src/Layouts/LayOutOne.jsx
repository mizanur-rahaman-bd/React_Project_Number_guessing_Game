import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const LayOutOne = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default LayOutOne;
