import cookie from 'cookie';

import { baseApiUrl } from 'enum/config';

import { fetchJson } from "lib/api";

const handler = async (req:any, res:any) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { email, password } = req.body;
  
  try {
    const { jwt, user } = await fetchJson(`${baseApiUrl}/auth/local`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: email, password }),
    });
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
    res.status(401).end();
  }
}

export default handler;