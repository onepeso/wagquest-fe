'use client';

import AttractionCard from './app-components/AttractionCard';
import HomeHeader from './app-components/HomeHeader';
import { useStore } from './state/useStore';
import { useEffect } from 'react';

export default function Home() {

  const {fetchAttractions, attractions} = useStore();

  useEffect(() => {
    fetchAttractions();
  }, [fetchAttractions]);

  console.log(attractions);

  return (
    <main className="flex flex-col items-center">
      <section className='w-full'>
        <HomeHeader />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full max-w-7xl px-4">
      {attractions.length > 0 ? (
          attractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))
        ) : (
          <p>No attractions found.</p>
        )}
      </section>
    </main>
  );
}
