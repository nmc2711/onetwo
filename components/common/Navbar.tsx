import { useColorMode } from "@chakra-ui/color-mode";
import Link from "next/link";
import { useSignOut, useUser } from "../../hooks/user";

const Navbar = () => {
  const { colorMode, setColorMode } = useColorMode();

  const user = useUser();
  const signOut = useSignOut();

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
                  {user.name}
                </li>
                <li>
                  <button onClick={signOut}>로그아웃</button>
                </li>
              </>

            ) :
            <Link href="/sign-in">
              <a>로그인페이지 이동</a>
            </Link>}
          </li>
          <li>
            <button onClick={() => setColorMode('light')}>라이트 모드</button>
            <button onClick={() => setColorMode('dark')}>다크모드</button>
            <button onClick={() => setColorMode('gradient')}>그라모드</button>
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
