'use client'

import { Place } from '@prisma/client'
import { useCallback, useEffect, useRef, useState } from 'react'
import WFAListItem from './wfa-list-item'

type Props = {
  places: Place[],
  total_page: number
}

const WFAList = ({ places,total_page }: Props) => {
  const [items, setItems] = useState<Place[]>(places);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<null | IntersectionObserver>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/wfa?page=${page + 1}`);
      const { data }: { data: Place[] } = await response.json();
      setItems(prevItems => [...prevItems, ...data]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      // TODO! catch error
    } finally {
      setIsLoading(false);
    }
  };

  const lastMovie = useCallback((node: any) => {
    if (!node) return
    if (isLoading) return
    if (observerTarget.current) observerTarget.current.disconnect();
    if(page >= total_page) return
    observerTarget.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchData()
      }
    })
    observerTarget.current.observe(node)
  }, [isLoading, fetchData, page, total_page])

  useEffect(() => {
    setItems(places)
    setPage(1)
  }, [places, total_page])
  


  return (
    <>
      <ul className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2' >
        {items.map((wfa, index) => (
          <WFAListItem key={wfa.name} place={wfa} ref={lastMovie} />
        ))}
      </ul>
      {isLoading && <div className="flex items-center justify-center min-h-[10vh]">
        <span className="flex items-center justify-center h-20 loader"></span>
      </div>}
    </>
  )
}

export default WFAList


// const [items, setItems] = useState<Place[]>(places);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<null | unknown>(null);
//   const [page, setPage] = useState(1);
//   const observerTarget = useRef(null);

//   const fetchData = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`http://localhost:3000/api/wfa?page=${page + 1}`);
//       const {data}: { data: Place[] } = await response.json();

//       setItems(prevItems => [...prevItems, ...data]);
//       setPage(prevPage => prevPage + 1);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         console.log("🚀 ~ file: wfa-list.tsx:43 ~ useEffect ~ entries:", entries)
//         if (entries[0].isIntersecting) {
//           fetchData();
//         }
//       },
//       { threshold: 1 }
//     );
// //     console.log("🚀 ~ file: wfa-list.tsx:50 ~ useEffect ~ observer:", observer)

//     if (observerTarget.current) {
//       observer.observe(observerTarget.current);
//     }

//     return () => {
//       if (observerTarget.current) {
//         observer.unobserve(observerTarget.current);
//       }
//     };
//   }, [observerTarget]);


// get the latest wfalist item
// useEffect(() => {
//   //create obeserver instance
//   const observer = new IntersectionObserver(
//     entries => {
//       if (entries[0].isIntersecting) {
//         fetchData();
//       }
//     },
//     { threshold: 0.8 }
//   );

//   // observe current ref (latest)
//   if (observerTarget.current) {
//     observer.observe(observerTarget.current);
//   }


//   return () => {
//     if (observerTarget.current) {
//       observer.unobserve(observerTarget.current);
//     }
//   }

// }, [items])