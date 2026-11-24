import data from '../data/portfolio'
import Icon from './Icon'

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <div><h2>Certificates and Badges</h2></div>

        <div className="cert-grid">
          {data.certifications.map((c, i) => (
            <article className="cert" key={i}>
              {c.image ? (
                <img className="cert-img" src={c.image} alt={c.name} loading="lazy" />
              ) : (
                <div className="cert-img" role="img" aria-label="Certificate placeholder">{c.imageLabel}</div>
              )}
              <div className="cert-body">
                <h3>{c.name}</h3>
                <p>{c.issuer}</p>
                <p className="when">{c.date}</p>
                {c.link && <a href={c.link} target="_blank" rel="noreferrer"><Icon n="out" /> View credential</a>}
              </div>
            </article>
          ))}
        </div>

        <h3 className="sub">Badges</h3>
        <div className="badges">
          {data.badges.map((b, i) => {
            const inner = (
              <>
                {b.image ? (
                  <img src={b.image} alt={b.name} loading="lazy" />
                ) : (
                  <div className="badge-ph" role="img" aria-label="Badge placeholder" />
                )}
                <span>{b.name}</span>
              </>
            )
            return b.link
              ? <a className="badge" key={i} href={b.link} target="_blank" rel="noreferrer">{inner}</a>
              : <div className="badge" key={i}>{inner}</div>
          })}
        </div>
      </div>
    </section>
  )
}