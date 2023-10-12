import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

    const response = await axios.get(
        'https://pamp-bra-1-dev.us.auth0.com/userinfo',
        {
          headers: {
            Accept: 'application/json;charset=UTF-8',
            'Content-Type': 'application/json',
            Authorization: req.headers.authorization,
          },
        }
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    console.log(response.response)
    if (response.response) {
      // error
      res.status(response.response.status).json(response.response.data);
    } else {
      // ok
      res.status(response.status).json(response.data);
    }
}