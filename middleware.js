import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log(`[LOG] ${request.method} ${request.nextUrl.pathname}`);
  return NextResponse.next();
}
