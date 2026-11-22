import data from '../data/portfolio'

function Timeline({ items }) {
  return (
    <ol className="tl">
      {items.map((x, i) => (
        <li key={i}>
          <h4>{x.role}</h4>
          <p className="org">{x.org}</p>
          <p className="when">{x.date}</p>
          <p className="ph">{x.details}</p>
        </li>
      ))}
    </ol>
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div><h2>Experience and Education</h2></div>
        <div className="two">
          <div>
            <h3 style={{ marginBottom: 24 }}>Experience</h3>
            <Timeline items={data.experience} />
          </div>
          <div>
            <h3 style={{ marginBottom: 24 }}>Education</h3>
            <Timeline items={data.education} />
          </div>
        </div>
      </div>
    </section>
  )
}
