import React from "react";

const Banner = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Austria’s Premier Casino Hotels: Luxury and Luck in One Place
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Austria offers a splendid array of casino hotels that combine the
            thrill of gaming with luxurious accommodations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
