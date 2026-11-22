import { useState } from 'react'
import data from '../data/portfolio'

export default function Header({ active }) {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="prog" aria-hidden="true" />
      <div className="wrap">
        <nav aria-label="Main">
          <a className="logo" href="#home">{data.name}</a>
          <button className="menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Menu'}
          </button>
          <ul className={open ? 'open' : ''}>
            {data.nav.map((n) => {
              const id = n.toLowerCase().replace(/\s+/g, "")
              return (
                <li key={n}>
                  <a href={'#' + id} className={active === id ? 'on' : ''}
                    aria-current={active === id ? 'true' : undefined}
                    onClick={() => setOpen(false)}>{n}</a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
