import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";


// This is the custom styles for the sidebar. It will be used as a component down below
const StyledSideBar = styled.section`
  width: 400px;
  height: 100%;
  padding: 30px 20px;
  border-right: 1px solid rgb(233, 233, 233);

  .logo-container {
    margin-bottom: 30px;
    text-align: center;
  }

  .app-main-nav {
    a {
      text-decoration: none;

      color: rgb(99, 115, 129);
      padding: 10px;
      border-radius: 5px;
      display: block;
      margin-bottom: 5px;

      &:hover {
        background: rgb(145, 158, 171, 0.08);
      }

      &.active {
        background: rgb(0, 171, 171, 0.08);
      }
    }
  }
`;

const Sidebar = () => {
    // We need this to set active paths on nav links below
  const router = useRouter();

  return (
    <StyledSideBar>
      <div className="logo-container">
        <Link href="/">
          <a className="logo">Project Manager</a>
        </Link>
      </div>
      <nav className="app-main-nav">
      <Link href="/projects">
          <a>
           Workspaces
          </a>
        </Link>
        <Link href="/projects">
          <a>
           All Projects
          </a>
        </Link>
      </nav>
      {/* <button onClick={() =>imapConnect()}>Sync Emails</button> */}
    </StyledSideBar>
  );
};

export default Sidebar;
