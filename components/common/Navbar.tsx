import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchJson } from "../../lib/api";

const Navbar = () => {
  const [user, setUser] = useState();

  const SettingUser = async () => {
    try {
      const user = await fetchJson('/api/user');
      console.log('타야해..', user)
      setUser(user);
    } catch (error) {
    }
  }
  
  useEffect(() => {
    SettingUser();
  }, []);
  console.log('nabar user', user)

  return (
    <>
      <nav className="px-2 py-1 text-sm">
        <ul className="flex gap-2">
          <li>
            <Link href="/">
              <a>메인페이지로 이동</a>
            </Link>
          </li>
          <li>
            <Link href="/mypage">
              <a>마이페이지로 이동</a>
            </Link>
          </li>
          <li>
            {user ? (
              <>
                <li>
                  황상한
                </li>
                <li>
                  <button>로그아웃</button>
                </li>              
              </>

            ) :
            <Link href="/sign-in">
              <a>로그인페이지 이동</a>
            </Link>}

          </li>
        </ul>
        {/* style */}
        <style jsx>{`
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            display: inline;
          }
          li:not(:first-child) {
            margin-left: 8px;
          }
        `}</style>
      </nav>
    </>
  );
};
export default Navbar;
