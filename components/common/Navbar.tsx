import Link from "next/link";
import { useUser } from "../../hooks/user";
import { fetchJson } from "../../lib/api";

const Navbar = () => {

  const user = useUser();

  const handleSignOut = async () => {
    await fetchJson('/api/logout');
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
