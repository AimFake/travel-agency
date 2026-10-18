function Hero() {
  return (
   <section id="hero" className="min-h-[70vh] bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat p-4 md:p-12 text-[#1b4534]">
        <div className="max-w-2xl rounded-xl bg-white/65 p-6 md:p-8">
            <h1 className="text-3xl font-bold md:text-5xl">Explore more, travel better.</h1>
            <p>At Northbound Travel, we make every journey as comfortable and easy as possible for our travellers.<br/>Explore our tours below and find your next adventure.</p>
            <a href="#tours"className="mt-5 inline-block rounded-lg bg-[#eac1b8] px-6 py-3 font-bold text-[#337058] hover:opacity-80">Explore tours</a>
        </div>
    </section>
  );
}

export default Hero;
