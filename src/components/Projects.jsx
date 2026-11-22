import data from '../data/portfolio'

function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px')
  e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px')
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div><h2>Featured Projects</h2></div>
        <div className="projects">
          {data.projects.map((p, i) => (
            <article className="proj" key={i} onMouseMove={spotlight}>
              {p.image ? (
                <img className="shot" src={p.image} alt={p.name} loading="lazy" style={{ objectFit: 'cover', width: '100%' }} />
              ) : (
                <div className="shot" role="img" aria-label="Project image placeholder">{p.imageLabel}</div>
              )}
              <div className="body">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="chips">
                  {p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
                <div className="role-line"><b>My role:</b> {p.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}