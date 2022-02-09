import cookie from 'cookie';
import { fetchJson } from "lib/api";

const handler = async (req: any, res: any) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { accessToken } = req.body;
  
  try {

    const { result } = await fetchJson(`http://ec2-54-180-30-10.ap-northeast-2.compute.amazonaws.com:5510/api/v1/users/kakao-login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({ accessToken }),
    });

    if (typeof window !== "undefined" && window) {
      window.sessionStorage.setItem('jwt', result.token);
      window.sessionStorage.setItem('idAuth', result.user.id);
    }
    
    res.status(200)
    .setHeader('Set-Cookie', cookie.serialize('jwt', result.token, {
      path: '/api',
      httpOnly: true,
    }))
    .setHeader('Set-Cookie', cookie.serialize('idAuth', result.user.id ))
    return res.json({
      jwt: result.token,
      id: result.user.id,
      name: result.user.nickname,
    })
  } catch (err) {
    res.status(401).end();
  }
}

export default handler;