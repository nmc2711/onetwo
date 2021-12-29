import { fetchJson } from "../../lib/api";

import { baseApiUrl } from '../../enum/config';

const handleUser = async(req:any, res:any) => {
    const { jwt } = req.cookies;
    if (!jwt) {
      res.status(401).end();
      return;
    }
    try {
      const user = await fetchJson(`${baseApiUrl}/users/me`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
      });
      res.status(200).json({
        id: user.id,
        name: user.username,
      });
    } catch (err) {
      res.status(401).end();
    }
  
}

export default handleUser;