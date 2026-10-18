function Testimonials() {
    return (
        <section id="testimonials">
            <h2>What our travellers say:</h2>
            <div className="testimonial-grid">
                <article className="testimonial-card">
                    <blockquote>
                        <p>The trip was well organized and a very good vacation!</p>
                    </blockquote>
                    <p>Anna - Japan Discovery</p>
                </article>

                <article className="testimonial-card">
                    <blockquote>
                        <p>The trip was easy, comfortable and unforgettable.</p>
                    </blockquote>
                    <p>Marco - Italian Escape</p>
                </article>

                <article className="testimonial-card">
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