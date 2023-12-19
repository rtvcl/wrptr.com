import WFAIntroduction from "@/components/wfa-bullshit";
import WFAList from "@/components/wfa-list";
import WfaSearch from "@/components/wfa-search";
import { Place } from "@prisma/client";

type Props = {
  searchParams: {
    search: string;
  };
};

type WfaPlacesResponse = {
  data: Place[];
  meta: { total: number; page: number; total_page: number };
};

const buildQueryString = (search?: string) => {
  if (!search) return "";
  return `?q=${encodeURIComponent(search)}`;
};

const fetchPlacesByWfaSearch = async (options: { search?: string; page?: number } = {}) => {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/wfa${buildQueryString(options.search)}`,
      { method: "GET" }
    );
    const data: WfaPlacesResponse = await response.json();
    return data;
  } catch (error) {
    // handle error based on your needs
    console.error(error);
  }
};


const WFCList = async ({ searchParams: { search } }: Props) => {
  const wfaResponse = await fetchPlacesByWfaSearch({ search })
  
  if(!wfaResponse) return

  return (
    <section className="max-w-screen-lg mx-4 mb-12 lg:mx-auto">
      <WFAIntroduction />
      <div>
        <WfaSearch initialSearch={search} />
        <WFAList places={wfaResponse.data} total_page={wfaResponse.meta.total_page} />
      </div>
    </section>
  );
};

export default WFCList;
