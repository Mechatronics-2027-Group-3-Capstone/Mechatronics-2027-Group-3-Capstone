import { useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { parseFrontmatter, splitList } from './lib/parseFrontmatter.js'

// One-line project summary shown at the top of every page. Edit freely.
const PROJECT_SUMMARY =
  'SmartToast is an AI-connected toaster with Spotify integration — it syncs toast doneness and a 16×16 LED album-art display to whatever song is currently playing.'

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

function currentSlugFromHash(fallback) {
  const hash = window.location.hash.replace('#', '')
  return entries.some((e) => e.slug === hash) ? hash : fallback
}

export default function App() {
  const firstSlug = entries[0]?.slug
  const [activeSlug, setActiveSlug] = useState(() => currentSlugFromHash(firstSlug))

  useEffect(() => {
    const onHashChange = () => setActiveSlug(currentSlugFromHash(firstSlug))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [firstSlug])

  const active = useMemo(
    () => entries.find((e) => e.slug === activeSlug) || entries[0],
    [activeSlug],
  )

  function selectWeek(slug) {
    window.location.hash = slug
    setActiveSlug(slug)
  }

  if (!active) {
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
                  className={e.slug === active.slug ? 'nav-item active' : 'nav-item'}
                  onClick={() => selectWeek(e.slug)}
                >
                  {e.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="content">
          <article className="entry-card">
            <div className="entry-header">
              <h1>{active.title}</h1>
              {(active.date || active.members.length > 0) && (
                <div className="entry-meta">
                  {active.date && <span className="meta-date">{active.date}</span>}
                  {active.members.map((m) => (
                    <span className="meta-pill" key={m}>
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="markdown-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {active.content}
              </ReactMarkdown>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
