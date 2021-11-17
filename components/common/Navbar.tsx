import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
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
            <Link href="/sign-in">
              <a>로그인페이지 이동</a>
            </Link>
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
