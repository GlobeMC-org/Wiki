import { Outlet } from "react-router-dom";
import "./nav.css"

const Nav = () => {
  return (
    <>
      <nav className="Nav">
        <div className="NavButtons">
          <a className="NavTitle" href="https://globemc.org"><b>GlobeMC</b></a>
          <a className="NavA" href="/">About</a>
          <a className="NavA" href="/rules">Rules</a>
          <a className="NavA" href="/guide">Guide</a>
          <a className="NavA" href="/plugins">Plugins</a>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
};

export default Nav;
