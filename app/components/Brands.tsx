import getData from "@/lib/getData";
import Brand from "../Brand";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const Brands = async (props: Props) => {
  const searchParams = props.searchParams;
  const gclid = searchParams && searchParams["gclid"];
  const { data }: any = await getData(gclid);
  return (
    <div className="mx-auto w-full max-w-screen-lg">
      {data?.map((item: any) => {
        return (
          <>
            <Brand key={item.id + 1} item={item} gclid={gclid} />
          </>
        );
      })}
    </div>
  );
};

export default Brands;
