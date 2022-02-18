import cookie from 'cookie';
import { NextApiHandler } from 'next';

import { fetchJson } from "lib/api";

import { User } from 'types/user';

const KakaoLoginHandler: NextApiHandler<User> = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { accessToken } = req.body;
  
  try {
    const { result } = await fetchJson(`${process.env.API_URL}/users/kakao-login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({ accessToken }),
    });
    res.status(200)
    .setHeader('Set-Cookie', cookie.serialize('jwt', result.token, {
      path: '/api',
      httpOnly: true,
    }))
    .setHeader('Set-Cookie', cookie.serialize('idAuth', result.user.id ))
    return res.json({
      id: result.user.id,
      name: result.user.nickname,
    })
  } catch (err) {
    res.status(401).end();
  }
}

export default KakaoLoginHandler;