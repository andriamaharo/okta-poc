import { handleAuth,handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  signup: handleLogin({ 
    authorizationParams: { screen_hint: 'signup' } ,
    returnTo: 'https://www.pampers.com/en-us/registration/thank-you-completed'
  }),
  login : handleLogin({}),
  onError(req: Request, error: Error) {
    console.error(error);
  }
});
