function Tours() {
    return (
        <section id="tours">
            <h2>Our tours</h2>

            <div className="tour-grid">
                <article className="tour-card">
                    <h3>Iceland Adventure</h3>
                    <p className="tour-duration">7 days</p>
                    <p className="tour-price">€899</p>
                    <p>Have you ever wanted to see the beauty of Iceland? Here's your chance.</p>
                </article>

                <article className="tour-card">
                    <h3>Italian Escape</h3>
                    <p className="tour-duration">5 days</p>
                    <p className="tour-price">€649</p>
                    <p>Visit Rome, discover its ancient history and explore the Italian culture.</p>
                </article>

                <article className="tour-card">
                    <h3>Japan Discovery</h3>
                    <p className="tour-duration">10 days</p>
                    <p className="tour-price">€1399</p>
                    <p>Travel through Tokyo, Kyoto and Osaka, experience Japan on an unforgettable journey!</p>
                </article>

                <article className="tour-card">
                    <h3>Hungarian Weekend</h3>
                    <p className="tour-duration">3 days</p>
                    <p className="tour-price">€399</p>
                    <p>Spend an unforgettable weekend in Budapest, one of Europe’s most beautiful capital cities!</p>
                </article>

            </div>
        </section>
    );
}

export default Tours;