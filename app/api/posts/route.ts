import { NextResponse } from 'next/server';

// Fetch All Posts
export async function GET() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();

  return NextResponse.json(posts);
}

// Crate a New Post
export async function POST(request: Request) {
  const data: Post = await request.json();

  return NextResponse.json(data, { status: 201 });
}
