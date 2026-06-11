export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response('Missing url parameter', { status: 400 });
  }

  // Solo permitir URLs de dominios conocidos
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
  } catch {
    return new Response('Invalid URL', { status: 400 });
  }

  const allowedDomains = [
    'larumstudio.com',
    'cdn4.fincaraiz.com.co',
    'images.infocasas.com.py',
    'cdn.infocasas.com.py',
  ];

  const isAllowed = allowedDomains.some(d => parsedUrl.hostname === d || parsedUrl.hostname.endsWith('.' + d));
  if (!isAllowed) {
    return new Response('Domain not allowed', { status: 403 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LarumStudio/1.0)',
        'Accept': 'image/webp,image/jpeg,image/png,image/*',
      },
    });

    if (!res.ok) {
      return new Response(`Upstream error: ${res.status}`, { status: res.status });
    }

    const contentType = res.headers.get('content-type') || 'image/jpeg';
    const buffer = await res.arrayBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (err) {
    return new Response('Failed to fetch image', { status: 500 });
  }
}
