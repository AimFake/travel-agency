function Header() {
  return (
    <header className="bg-[#eac1b8] border-b-2 border-[#f07458]">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-5 md:flex-row md:justify-between md:px-8">

        <a href="#hero" className="text-xl font-bold text-[#337058]">
          Northbound Travel
        </a>

        <div className="flex flex-wrap justify-center gap-4 text-center text-sm md:gap-6">
          <a href="#tours" className="font-bold text-[#337058]">
            Look out for our tours
          </a>

          <a href="#testimonials" className="font-bold text-[#337058]">
            Check what others say about us
          </a>

          <a href="#plan" className="font-bold text-[#337058]">
            Plan your travel
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Header;
