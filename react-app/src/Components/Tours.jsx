import { useState, useEffect } from 'react';
import TourCard from './TourCard';

function Tours() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    async function loadTours() {
      try {
        const response = await fetch('http://localhost:3001/api/tours');

        if (!response.ok) {
          throw new Error('Failed to load tours');
        }

        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error('Error loading tours:', error);
      }
    }
    loadTours();
  }, []);

  const filteredTours = tours.filter((tour) => {
    if (filter === 'budget') {
      return tour.price < 700;
    }

    if (filter === 'premium') {
      return tour.price >= 700;
    }

    return true;
  });

  return (
    <section id="tours" className="bg-[#f4f1ea] px-4 py-12 text-[#1b4534] md:px-12">
      <h2 className="mb-6 text-3xl font-bold">
        Our tours
      </h2>

      <div className="mb-8">
        <label htmlFor="tour-filter" className="mr-3 font-semibold">
          Filter by price:
        </label>

        <select
          id="tour-filter"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="rounded-lg border border-[#337058] bg-white p-3 text-[#1b4534] focus:outline-2 focus:outline-[#337058]"
        >
          <option value="all">All tours</option>
          <option value="budget">Under €700</option>
          <option value="premium">€700 and above</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {filteredTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
