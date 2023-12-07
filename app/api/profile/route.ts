import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { getAccessToken } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

const GET = withApiAuthRequired(async () => {
  const session = await getSession();
  const { accessToken } = await getAccessToken();
  return NextResponse.json(accessToken);
});

export { GET };
