import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url, method = 'GET', headers = {} } = await request.json();

    // Validation
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

    // Build fetch options
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'User-Agent': 'ApiLens/1.0',
        ...headers, // User's custom headers
      },
    };

    // Fetch from external API
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    const size = JSON.stringify(data).length;

    return NextResponse.json({
      data,
      status: response.status,
      size,
    });

  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}