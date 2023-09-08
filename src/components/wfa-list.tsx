"use client";

import { Place } from "@prisma/client";
import { useCallback, useEffect, useRef, useState } from "react";
import WFAListItem from "./wfa-list-item";

type Props = {
  places: Place[];
  total_page: number;
};

const WFAList = ({ places, total_page }: Props) => {
  const [items, setItems] = useState<Place[]>(places);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<null | IntersectionObserver>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/wfa?page=${page + 1}`);
      const { data }: { data: Place[] } = await response.json();
      setItems((prevItems) => [...prevItems, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
      throw new Error("could not fetch data...");
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  const lastMovie = useCallback(
    (node: any) => {
      if (!node) return;
      if (isLoading) return;
      if (observerTarget.current) observerTarget.current.disconnect();
      if (page >= total_page) return;
      observerTarget.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      });
      observerTarget.current.observe(node);
    },
    [isLoading, fetchData, page, total_page]
  );

  useEffect(() => {
    setItems(places);
    setPage(1);
  }, [places, total_page]);

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
        {items.map((wfa, index) => (
          <WFAListItem key={wfa.name} place={wfa} ref={lastMovie} />
        ))}
      </ul>
      {isLoading && (
        <div className="flex items-center justify-center min-h-[10vh]">
          <span className="flex items-center justify-center h-20 loader"></span>
        </div>
      )}
    </>
  );
};

export default WFAList;
