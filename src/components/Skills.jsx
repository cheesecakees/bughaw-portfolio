import data from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div><h2>Skills and Technologies</h2></div>
        <div className="skills">
          {data.skills.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <div className="chips">
                {g.items.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
