
function QuantityStepper({ value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        className="rounded bg-[#eac1b8] px-3 py-1 disabled:opacity-40"
      >
        -
      </button>

      <span>{value}</span>

      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= 10}
        className="rounded bg-[#eac1b8] px-3 py-1 disabled:opacity-40"
      >
        +
      </button>
    </div>
  );
}

export default QuantityStepper;
