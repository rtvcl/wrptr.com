import WFAIntroduction from "@/components/wfa-bullshit";
import WFAList from "@/components/wfa-list";
import WfaSearch from "@/components/wfa-search";
import { Place } from "@prisma/client";

type Props = {
  searchParams: {
    search: string;
  };
};

const WFCList = async ({ searchParams: { search } }: Props) => {
  const response = await fetch(
    `${process.env.BASE_URL}/api/wfa${
      search ? `?q=${encodeURIComponent(search)}` : ""
    }`,
    { method: "GET" }
  );
  const {
    data,
    meta,
  }: {
    data: Place[];
    meta: { total: number; page: number; total_page: number };
  } = await response.json();

  return (
    <section className="max-w-screen-lg mx-4 mb-12 lg:mx-auto">
      <WFAIntroduction />
      <div>
        <div>
          <WfaSearch initialSearch={search} />
          <WFAList places={data} total_page={meta.total_page} />
        </div>
      </div>
    </section>
  );
};

export default WFCList;
