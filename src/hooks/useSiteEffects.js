import { useEffect, useState } from 'react'

// Tracks the active section, scroll progress bar, and scroll-reveal animations.
export default function useSiteEffects(ids) {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })

    const rv = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    document
      .querySelectorAll('section:not(#home):not(#contact) h2, .skills > div, .proj, .two > div, .contact > *')
      .forEach((el, i) => {
        el.classList.add('rv')
        el.style.animationDelay = (i % 4) * 90 + 'ms'
        rv.observe(el)
      })

    const bar = document.querySelector('.prog')
    const onScroll = () => {
      const d = document.documentElement
      if (bar) bar.style.width = (d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight)) * 100 + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => { io.disconnect(); rv.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [ids])

  return active
}
