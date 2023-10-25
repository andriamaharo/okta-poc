import { handleAuth,handleLogin } from '@auth0/nextjs-auth0';

export async function  GET(req : Request) {
  var defaultEmail = req.url.includes("signup-tools") ? 'ricky.andriamaharo@proximity.fr' : '';
  handleAuth({
    signup: handleLogin({ 
      authorizationParams: { screen_hint: 'signup', login_hint: defaultEmail  } ,
      returnTo: 'https://www.pampers.com/en-us/registration/thank-you-completed'
    }),
    login : handleLogin({}),
    onError(req: Request, error: Error) {
      console.error(error);
    }
  });
} 
