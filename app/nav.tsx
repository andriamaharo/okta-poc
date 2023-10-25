'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Nav() {
  const { user } = useUser();
  const pathname = usePathname();
  const pageName = pathname?.split('/').pop();

  return (
    <>
      <div className={`header ${pageName}`}>
        <nav>
          <ul className='nav-items-list'>
            <li>
              <Link href="/" legacyBehavior>
                <a className="active">App Router</a>
              </Link>
            </li>
            <li>
              <Link href="/page-router" legacyBehavior>
                <a>Page Router</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`header ${pageName || 'home'} secondary`}>
        <nav>
         <ul className='nav-items-list'>
            <li>
              <Link href="/" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/profile" legacyBehavior>
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/edge-profile" legacyBehavior>
                <a>Profile (Edge)</a>
              </Link>
            </li>
            <li>
              <Link href="/profile-api" legacyBehavior>
                <a>Profile (API)</a>
              </Link>
            </li>
            <li>
              <Link href="/edge-profile-api" legacyBehavior>
                <a>Profile (API / Edge)</a>
              </Link>
            </li>
            <li>
              <Link href="/profile-middleware" legacyBehavior>
                <a>Profile (Middleware)</a>
              </Link>
            </li>{' '}
            {user ? (
              <>
                <li>
                  <a href="/api/auth/logout" data-testid="logout">
                    Logout
                  </a>
                </li>
                <li>
                  <a href="/api/edge-auth/logout" data-testid="logout-edge">
                    Logout (Edge)
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/api/auth/login" data-testid="login">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/api/auth/signup" data-testid="signup">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/api/auth/signup-tools" data-testid="signup-tools">
                    Register from tools
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
