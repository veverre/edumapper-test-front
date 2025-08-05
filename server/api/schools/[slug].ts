
export default defineEventHandler((event) => {
  const slug = event.context.params?.slug
  const name = slug?.replace(/-/g, ' ') || ''

  return {
    name: name.replace(/\b\w/g, l => l.toUpperCase()), // capitalise
    slug,
    city: 'Paris',
    type: name.includes('privé') ? 'private' : 'public'
  }
})