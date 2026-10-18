
import { useState } from 'react';
import { tours } from '../data/tours';
import TourCard from './TourCard';

function Tours() {
  const [filter, setFilter] = useState('all');

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
    <section id="tours" className="px-4 py-12 md:px-12">
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
          className="rounded-lg border p-3"
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
