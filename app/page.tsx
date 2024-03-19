import Image from "next/image";
import Navbar from "./components/Navbar";
import Brands from "./components/Brands";
import { Footer } from "./components/Footer";
import Banner from "./components/Banner";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home(props: Props) {
  const searchParams = props.searchParams;

  return (
    <>
      <Navbar />
      <Banner />
      <Brands searchParams={searchParams} />
      <Footer />
    </>
  );
}
