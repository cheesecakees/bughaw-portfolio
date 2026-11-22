import data from '../data/portfolio'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div><h2>About me</h2></div>
        <div className="two">
          <div>
            {data.about.intro.map((t, i) => <p key={i} className="ph">{t}</p>)}
          </div>
          <div>
            <h3>Education</h3>
            <p className="ph">{data.about.education}</p>
            <h3 style={{ marginTop: 28 }}>Interests and goals</h3>
            <p className="ph">{data.about.goals}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
