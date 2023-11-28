import React from "react";
import BreadCrumb from "../../../components/layout/BreadCrumb";

export default function page() {
  return (
    <main id="main" className="main">
      {/* End Page Title */}
      <BreadCrumb />
      <section className="section dashboard"></section>
    </main>
  );
}
