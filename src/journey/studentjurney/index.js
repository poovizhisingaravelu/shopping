import React from "react";
import {  Outlet } from "react-router-dom";
import Appheader from "../../commpent/Appheader/Appheader";

const routes = [
  {
    id: "journey-1",
    label: "Create Student",
    route: "/students/create",
  },
  {
    id: "journey-2",
    label: "Manage Student",
    route: "/students/manage",
  },
];

export default function index() {
  return (
    <div>
      <Appheader journeyName="Students details" routes={routes} />
      
      <Outlet />
    </div>
  );
}