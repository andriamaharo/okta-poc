import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import ServerComponent from '@/app/server-component';
import ClientComponent from '@/app/client-component';
import { getAccessToken } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(
  async function Page() {
    const session = await getSession();
    const { accessToken } = await getAccessToken();

    return (
      <main>
        <h1>Profile</h1>
        <h2>Page:</h2>
        <h3>Access Token</h3>
        <pre>{JSON.stringify({ accessToken }, null, 2)}</pre>
        <h3>User session</h3>
        <pre>{JSON.stringify(session?.user, null, 2)}</pre>
        <h2>Server Component:</h2>
        <ServerComponent />
        <h2>Client Component:</h2>
        <ClientComponent />
      </main>
    );
  },
  { returnTo: '/profile' }
);
