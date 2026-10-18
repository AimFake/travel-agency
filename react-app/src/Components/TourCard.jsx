
import { useState } from 'react';
import QuantityStepper from './QuantityStepper';

function TourCard({ tour }) {
  const [travellers, setTravellers] = useState(1);

  return (
    <article className="rounded-xl bg-white p-6 shadow-md">
      <h3 className="mb-3 text-xl font-bold">
        {tour.title}
      </h3>

      <p className="font-semibold">
        {tour.duration} days
      </p>

      <p className="my-3 text-xl font-bold text-[#337058]">
        €{tour.price} / person
      </p>

      <p className="mb-6">
        {tour.description}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span>Travellers:</span>

        <QuantityStepper
          value={travellers}
          onChange={setTravellers}
        />
      </div>

      <p className="mt-5 border-t pt-4 font-bold">
        Total: €{tour.price * travellers}
      </p>
    </article>
  );
}

export default TourCard;
