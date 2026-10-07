// Cloudflare Pages Function: liefert den Sinnfunk-Podcast-Feed unter
// https://sinnfunk.live/podcast.xml aus.
// Der Feed selbst wird in Supabase (Edge Function "podcast-feed") erzeugt;
// diese Datei holt ihn dort ab und reicht ihn unter der eigenen Adresse weiter.

const QUELLE = 'https://mliatnfqgnctbxhbwhzp.supabase.co/functions/v1/podcast-feed'

export async function onRequest() {
  const antwort = await fetch(QUELLE, { cf: { cacheTtl: 900, cacheEverything: true } })
  return new Response(antwort.body, {
    status: antwort.status,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=900',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
