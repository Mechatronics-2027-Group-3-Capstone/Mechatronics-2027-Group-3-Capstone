// Tiny, dependency-free front-matter reader.
//
// Front matter is entirely OPTIONAL — a plain markdown file with no
// "---" block at the top renders exactly as written. When a file does
// start with a "---" block, simple "key: value" lines inside it are
// read as metadata (title, date, members, ...) and used to build the
// nice header at the top of the page. Anything that doesn't parse is
// just ignored rather than breaking the page.
export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^\s*([A-Za-z0-9_-]+)\s*:\s*(.*)\s*$/)
    if (!kv) continue
    const value = kv[2].trim().replace(/^["'](.*)["']$/, '$1')
    data[kv[1].toLowerCase()] = value
  }

  return { data, content: raw.slice(match[0].length) }
}

// "Ada, Grace, Alan" -> ["Ada", "Grace", "Alan"]
export function splitList(value) {
  if (!value) return []
  return value
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}
