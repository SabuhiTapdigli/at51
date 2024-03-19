import React from "react";
// import "./Brand.scss";
import Button from "./components/Button/Button";
import Image from "next/image";
import Rating from "@mui/material/Rating";

const HotelCard = ({ item, gclid }: any) => {
  const { title, image, text, link } = item;
  return (
    <div className="flex flex-col justify-around lg:flex-row items-left  lg:items-center mb-2 bg-cyan-700 border border-gray-200 rounded-lg shadow hover:bg-cyan-500 py-4 lg:py-14 relative">
      <div className="max-w-72 h-44 ml-2 mr-40 lg:mr-0">
        <Image
          src={image}
          width="0"
          height="0"
          sizes="100vw"
          style={{
            borderRadius: "6px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt=""
        />
      </div>

      <div className="lg:max-w-screen-sm lg:w-1/2 p-4 text-center lg:text-left flex flex-col justify-center items-center lg:block">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h1>
        <p className=" text-white lg:truncate ...">{text}</p>
        <Rating
          name="size-large"
          defaultValue={5}
          size="small"
          className="my-4"
        />
        <Button url={link} gclid={gclid} title={title} />
      </div>
      <div className="flex flex-col justify-center text-center lg:justify-end items:center lg:items-end h-full gap-10">
        <span className="px-2 py-1 bg-blue-400 rounded-xl text-white w-fit block mx-auto absolute top-6 right-10">
          Min: €208
        </span>
        <span className=" w-fit block mx-auto absolute top-16 right-10 mt-2">
          <span className="bg-green-800 px-1.5 py-2 rounded-lg text-white">
            9.5
          </span>{" "}
          <span className="px-2 py-2  bg-red-700 rounded-xl text-white">
            Perfect
          </span>
        </span>
      </div>
    </div>
  );
};

export default HotelCard;
