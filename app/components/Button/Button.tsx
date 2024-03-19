"use client";
import React from "react";
import "./Button.css";
import { track } from "@vercel/analytics";

const Button = ({ url, gclid, title }: any) => {
  return (
    <a
      className="button cursor-pointer block w-1/2 text-center"
      href={`${url}${gclid ? gclid : ""}`}
      onClick={(event) => {
        track("Visit", { title });
      }}
      target="_blank"
    >
      <span className="text-2xl block mt-1">VISIT</span>
    </a>
  );
};

export default Button;
