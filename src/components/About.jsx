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
            <h3>Interests and goals</h3>
            <p className="ph">{data.about.goals}</p>
            <h3 style={{ marginTop: 28 }}>Organizations</h3>
            <ul className="orgs">
              {data.about.organizations.map((o, i) => (
                <li key={i}><strong>{o.name}</strong><span>{o.role}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}