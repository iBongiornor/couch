import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.less";
import icon from "@/assets/icons/icon1.svg";

const Header = () => (
  <header class={style.header}>
    <h1>
      <img width="56" height="56" src={icon} />
      <span
        style={{
          fontFamily: "cursive",
          verticalAlign: "top",
          marginLeft: "1rem",
        }}
      >
        Movie Couch
      </span>
    </h1>
    {/* <nav>
      <Link activeClassName={style.active} href="/">
        Home
      </Link>
    </nav> */}
  </header>
);

export default Header;
