import { fetchJson } from "lib/api";

const handleUser = async(req:any, res:any) => {

    if (!window.sessionStorage.getItem('idAuth')) {
      res.status(401).end();
      return;
    }

    const idAuth = window.sessionStorage.getItem('idAuth');
    const jwt = window.sessionStorage.getItem('jwt');
    try {
      const user = await fetchJson(`http://ec2-54-180-30-10.ap-northeast-2.compute.amazonaws.com:5510/api/v1/users/${idAuth}`, {
        headers: { 'Authorization': `Bearer ${jwt}` },
      });
      res.status(200).json({
        id: user.result.id,
        name: user.result.nickname,
      });
    } catch (err) {
      res.status(401).end();
    }
  
}

export default handleUser;