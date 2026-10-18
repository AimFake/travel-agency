function Testimonials() {
    return (
        <section id="testimonials" className="bg-[#f8f6f1] px-4 py-12 text-[#1b4534] md:px-12">
            <h2 className="mb-8 text-3xl font-bold">What our travellers say:</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <article className="rounded-xl bg-white p-6 shadow-md transition-transform hover:-translate-y-1">
                    <blockquote>
                        <p>The trip was well organized and a very good vacation!</p>
                    </blockquote>
                    <p>Anna - Japan Discovery</p>
                </article>

                <article className="rounded-xl bg-white p-6 shadow-md transition-transform hover:-translate-y-1">
                    <blockquote>
                        <p>The trip was easy, comfortable and unforgettable.</p>
                    </blockquote>
                    <p>Marco - Italian Escape</p>
                </article>

                <article className="rounded-xl bg-white p-6 shadow-md transition-transform hover:-translate-y-1">
                    <blockquote>
                        <p>I would definitely travel with Northbound Travel again!</p>
                    </blockquote>
                    <p>Sophia - Hungarian Weekend</p>
                </article>
            </div>
        </section>
    );
}

export default Testimonials;