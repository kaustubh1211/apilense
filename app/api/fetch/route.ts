import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    // Basic validation
    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'Invalid URL' },
        { status: 400 }
      );
    }

    // Security: Block localhost/internal IPs
    const blocked = ['localhost', '127.0.0.1', '0.0.0.0', '192.168'];
    if (blocked.some(host => url.includes(host))) {
      return NextResponse.json(
        { error: 'Cannot fetch from local/internal URLs' },
        { status: 403 }
      );
    }

    // Fetch from external API
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'ApiLens/1.0',
      },
    });

    const data = await response.json();
    const size = JSON.stringify(data).length;

    return NextResponse.json({
      data,
      status: response.status,
      size,
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}