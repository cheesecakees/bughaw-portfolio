// Dynamic Island-style active navigation indicator
function setup() {
  const header = document.querySelector('header')
  const list = header && header.querySelector('nav ul')

  if (!list) return false
  if (header.querySelector('.nav-ind')) return true

  const ind = document.createElement('span')
  ind.className = 'nav-ind'
  ind.setAttribute('aria-hidden', 'true')

  header.appendChild(ind)
  header.classList.add('has-ind')

  let first = true

  const place = (a) => {
    if (!a) {
      ind.style.opacity = '0'
      return
    }

    const h = header.getBoundingClientRect()
    const r = a.getBoundingClientRect()

    if (first) ind.style.transition = 'none'

    ind.style.opacity = '1'
    ind.style.width = r.width + 'px'
    ind.style.height = r.height + 'px'
    ind.style.transform =
      `translate(${r.left - h.left}px, ${r.top - h.top}px)`

    if (first) {
      void ind.offsetWidth
      ind.style.transition = ''
      first = false
    }
  }

  const sync = () => place(list.querySelector('a.on'))

  new MutationObserver(sync).observe(list, {
    attributes: true,
    attributeFilter: ['class'],
    subtree: true
  })

  list.addEventListener('click', (e) => {
    const a = e.target.closest('a')
    if (a) place(a)
  })

  window.addEventListener('resize', sync)

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(sync)
  }

  requestAnimationFrame(sync)

  return true
}

if (!setup()) {
  const mo = new MutationObserver(() => {
    if (setup()) mo.disconnect()
  })

  mo.observe(document.documentElement, {
    childList: true,
    subtree: true
  })
}