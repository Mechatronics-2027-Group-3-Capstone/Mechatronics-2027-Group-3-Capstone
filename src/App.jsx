import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { parseFrontmatter, splitList } from './lib/parseFrontmatter.js'

// One-line project summary shown at the top of every page. Edit freely.
const PROJECT_SUMMARY =
  'Possible project ideas: ELEGANT lamp, 3D print painter, and smart blinds system.'

// Every markdown file in src/content is picked up automatically —
// just drop in weekN.md and it appears on the site. No registration,
// no build config, nothing else to touch.
const files = import.meta.glob('./content/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function weekNumber(path) {
  const match = path.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 0
}

const entries = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const num = weekNumber(path)
    return {
      slug: `week-${num}`,
      num,
      title: data.title || `Week ${num}`,
      date: data.date || data.daterange || data.dates || '',
      members: splitList(data.members || data.author || data.authors),
      content,
    }
  })
  .sort((a, b) => a.num - b.num)

function slugFromHash() {
  const hash = window.location.hash.replace('#', '')
  return entries.some((e) => e.slug === hash) ? hash : null
}

export default function App() {
  const [activeSlug, setActiveSlug] = useState(() => slugFromHash() || entries[0]?.slug)
  const cardRefs = useRef({})

  // On first load, jump to the week named in the URL hash (if any).
  useEffect(() => {
    const slug = slugFromHash()
    if (slug) cardRefs.current[slug]?.scrollIntoView()
  }, [])

  // Highlight whichever week is currently at the top of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (items) => {
        const visible = items
          .filter((i) => i.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length) setActiveSlug(visible[0].target.id)
      },
      { rootMargin: '-90px 0px -70% 0px' },
    )
    Object.values(cardRefs.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function selectWeek(slug) {
    history.replaceState(null, '', `#${slug}`)
    cardRefs.current[slug]?.scrollIntoView({ behavior: 'smooth' })
    setActiveSlug(slug)
  }

  if (entries.length === 0) {
    return (
      <div className="empty-state">
        <h1>Design Log</h1>
        <p>
          No entries yet. Add a <code>week1.md</code> file to{' '}
          <code>src/content/</code> to get started.
        </p>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <span className="brand">Design Log</span>
          <span className="brand-sub">Mechatronics 2027 · Group 3 Capstone</span>
        </div>
      </header>

      <div className="intro">
        <p>{PROJECT_SUMMARY}</p>
      </div>

      <div className="layout">
        <nav className="sidebar">
          <ul>
            {entries.map((e) => (
              <li key={e.slug}>
                <button
                  className={e.slug === activeSlug ? 'nav-item active' : 'nav-item'}
                  onClick={() => selectWeek(e.slug)}
                >
                  {e.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="content">
          {entries.map((e) => (
            <article
              className="entry-card"
              id={e.slug}
              key={e.slug}
              ref={(el) => (cardRefs.current[e.slug] = el)}
            >
              <div className="entry-header">
                <h1>{e.title}</h1>
                {(e.date || e.members.length > 0) && (
                  <div className="entry-meta">
                    {e.date && <span className="meta-date">{e.date}</span>}
                    {e.members.map((m) => (
                      <span className="meta-pill" key={m}>
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{e.content}</ReactMarkdown>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  )
}
