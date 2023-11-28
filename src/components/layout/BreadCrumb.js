"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function BreadCrumb() {
  const pathname = usePathname();
  const prevpagegname = pathname?.split("/")?.[1];
  const pagename = pathname?.split("/")?.[2];
  return (
    <div className="pagetitle text-uppercase">
      <h1>{pagename}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-capitalize">
            <a href="index.html">{prevpagegname}</a>
          </li>
          <li className="breadcrumb-item active  text-capitalize">
            {pagename}
          </li>
        </ol>
      </nav>
    </div>
  );
}
