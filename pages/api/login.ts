import cookie from 'cookie';

const { CMS_URL } = process.env;

import { fetchJson } from "../../lib/api";

const handler = async (req:any, res:any) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { email, password } = req.body;
  
  try {
    const { jwt, user } = await fetchJson(`${CMS_URL}/auth/local`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: email, password }),
    });
    console.log('email', user)
    res.status(200)
    .setHeader('Set-Cookie', cookie.serialize('jwt', jwt, {
      path: '/api',
      httpOnly: true,
    }))
    return res.json({
      id: user.id,
      name: user.username,
    })
  } catch (err) {
    console.log(err)
    res.status(401).end();
  }
}

export default handler;