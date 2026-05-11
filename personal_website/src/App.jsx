import { journeys, profile, stories } from './data/trips.js';

function App() {
  const featured = journeys[0];

  return (
    <main>
      <header className="site-nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="回到首页">
          {profile.name}
        </a>
        <nav>
          <a href="#journeys">旅程</a>
          <a href="#gallery">照片</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-image" src={featured.image} alt={`${featured.place}旅行照片占位`} />
        <div className="hero-scrim" />
        <div className="hero-copy">
          <p className="eyebrow">Travel Notes / Photo Diary</p>
          <h1 id="hero-title">把去过的远方，整理成会发光的页面。</h1>
          <p>{profile.intro}</p>
          <a className="primary-link" href="#gallery">
            看照片
          </a>
        </div>
        <aside className="hero-caption" aria-label="当前精选旅程">
          <span>{featured.date}</span>
          <strong>{featured.place}</strong>
          <p>{featured.tone}</p>
        </aside>
      </section>

      <section className="journey-band" id="journeys" aria-labelledby="journey-title">
        <div className="section-heading">
          <p className="eyebrow">Journey Index</p>
          <h2 id="journey-title">按地点收藏路上的瞬间</h2>
        </div>
        <div className="journey-list">
          {journeys.map((journey, index) => (
            <article className="journey-row" key={journey.id}>
              <span className="journey-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p>{journey.date} / {journey.place}</p>
                <h3>{journey.title}</h3>
              </div>
              <span>{journey.tone}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery" id="gallery" aria-labelledby="gallery-title">
        <div className="section-heading">
          <p className="eyebrow">Photo Wall</p>
          <h2 id="gallery-title">照片先替你站好位置</h2>
        </div>
        <div className="photo-grid">
          {journeys.map((journey, index) => (
            <figure className={`photo-tile tile-${index + 1}`} key={journey.id} tabIndex="0">
              <img src={journey.image} alt={`${journey.place} - ${journey.title}`} />
              <figcaption>
                <strong>{journey.place}</strong>
                <span>{journey.summary}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="stories" aria-labelledby="stories-title">
        <div className="section-heading">
          <p className="eyebrow">Selected Stories</p>
          <h2 id="stories-title">三段可以继续生长的旅行短记</h2>
        </div>
        <div className="story-stack">
          {stories.map((story) => (
            <article className="story" key={story.title}>
              <img src={story.image} alt={story.title} />
              <div>
                <p className="eyebrow">{story.kicker}</p>
                <h3>{story.title}</h3>
                <p>{story.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="contact" id="contact">
        <p className="eyebrow">Stay In Touch</p>
        <h2>下一次出发前，可以先打个招呼。</h2>
        <a className="mail-link" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="social-links">
          {profile.socials.map((social) => (
            <a key={social.label} href={social.href}>
              {social.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}

export default App;
