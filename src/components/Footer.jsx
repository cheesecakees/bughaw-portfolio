import data from '../data/portfolio'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
        <div className="soc">
          {data.socials.map((s) => (
            <a key={s.label} href={s.url} aria-label={s.label}><Icon n={s.icon} size={20} /></a>
          ))}
        </div>
      </div>
    </footer>
  )
}
