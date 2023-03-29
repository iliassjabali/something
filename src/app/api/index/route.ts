import env from '@/lib/env.mjs'
export async function GET(request: Request) {
  console.log('env', env)
  return new Response('Hello, Next.js!')
}
