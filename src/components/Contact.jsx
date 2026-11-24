import { useState } from 'react'
import data from '../data/portfolio'
import Icon from './Icon'

export default function Contact() {
  const [v, setV] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errs, setErrs] = useState({})
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const set = (k) => (e) => {
    setV((prev) => ({ ...prev, [k]: e.target.value }))
  }

  const submit = async (e) => {
    e.preventDefault()

    const er = {}

    if (v.name.trim().length < 2) {
      er.name = 'Enter your name.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
      er.email = 'Enter a valid email address.'
    }

    if (v.subject.trim().length < 3) {
      er.subject = 'Enter a subject.'
    }

    if (v.message.trim().length < 10) {
      er.message = 'Write at least 10 characters.'
    }

    setErrs(er)
    setDone(false)
    setSubmitError('')

    if (Object.keys(er).length > 0) return

    setSending(true)

    try {
      const response = await fetch(
        'https://formspree.io/f/xoedypky',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: v.name,
            email: v.email,
            subject: v.subject,
            message: v.message,
            _subject: `Portfolio Message: ${v.subject}`
          })
        }
      )

      if (!response.ok) {
        throw new Error('Message submission failed.')
      }

      setDone(true)

      setV({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      setErrs({})
    } catch (error) {
      setSubmitError(
        'Something went wrong. Please try again later.'
      )
    } finally {
      setSending(false)
    }
  }

  const field = (k, label, textarea) => {
    const Tag = textarea ? 'textarea' : 'input'

    return (
      <label>
        {label}

        <Tag
          name={k}
          value={v[k]}
          onChange={set(k)}
          rows={textarea ? 5 : undefined}
          type={
            textarea
              ? undefined
              : k === 'email'
                ? 'email'
                : 'text'
          }
          aria-invalid={!!errs[k]}
          aria-describedby={'e-' + k}
          autoComplete={
            k === 'name'
              ? 'name'
              : k === 'email'
                ? 'email'
                : 'off'
          }
        />

        <span className="err" id={'e-' + k} role="alert">
          {errs[k]}
        </span>
      </label>
    )
  }

  return (
    <section id="contact">
      <div className="wrap contact">
        <div>
          <h2>Let’s Talk</h2>

          <p className="ph">{data.closing}</p>

          <ul>
            <li>
              <a href={'mailto:' + data.email}>
                <Icon n="mail" /> {data.email}
              </a>
            </li>

            {data.socials.map((s) => (
              <li key={s.label}>
                <a href={s.url}>
                  <Icon n={s.icon} /> {s.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} noValidate>
          {field('name', 'Name')}
          {field('email', 'Email')}
          {field('subject', 'Subject')}
          {field('message', 'Message', true)}

          <button
            className="btn p"
            type="submit"
            disabled={sending}
            style={{ justifySelf: 'start' }}
          >
            {sending ? 'Sending...' : 'Send message'}
          </button>

          {done && (
            <p className="ok" role="status">
              Your message has been sent successfully. Thank you for reaching out!
            </p>
          )}

          {submitError && (
            <p className="err" role="alert">
              {submitError}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}