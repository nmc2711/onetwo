import Link from "next/link";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchJson } from "../../lib/api";

interface TUser {
  id: number | null;
  name: string | null;
};

const Navbar = () => {
  const query = useQuery('user', async () => {
    try {
      return await fetchJson('/api/user');
    } catch (error) {
      return undefined;
    }
  }, {
    cacheTime: Infinity,
    staleTime: 40_00,
  });
  let user = query.data;

  console.log('여기니?', user);

  const handleSignOut = async () => {
    await fetchJson('/api/logout');
    user = undefined;
  }

  return (
    <>
      <nav className="py-1 text-sm">
        <ul className="md:flex lg:flex xl:flex">
          <li className="__nav">
            <Link href="/">
              <a>메인페이지로 이동</a>
            </Link>
          </li>
          <li className="__nav">
            <Link href="/mypage">
              <a>마이페이지로 이동</a>
            </Link>
          </li>
          <li className="__nav">
            {user ? (
              <>
                <li>
                  {user.name}
                </li>
                <li>
                  <button onClick={handleSignOut}>로그아웃</button>
                </li>
              </>

            ) :
              <Link href="/sign-in">
                <a>로그인페이지 이동</a>
              </Link>}
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
