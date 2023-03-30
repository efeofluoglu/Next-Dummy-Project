// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest } from 'next/server';

export const config = {
	runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  return new Response(JSON.stringify({ name: 'John Doe' }))
}