import data from '../data/portfolio'

export default function Hero() {
  return (
    <section id="home">
      <div className="wrap hero">
        <div>
          <h1 className="rise">{data.name}</h1>
          <p className="role rise">{data.title}</p>
          <p className="tag rise">{data.tagline}</p>
          <div className="btns rise">
            <a className="btn p" href="#projects">View my work</a>
            <a className="btn s" href="#contact">Get in touch</a>
          </div>
        </div>
        <div className="pw rise">
          {data.photo ? (
            <div className="portrait">
              <div className="portrait-ring" aria-hidden="true" />
              <img src={data.photo} alt={data.name} />
            </div>
          ) : (
            <div className="photo" role="img" aria-label="Profile photo placeholder">{data.photoLabel}</div>
          )}
        </div>
      </div>
    </section>
  )
}