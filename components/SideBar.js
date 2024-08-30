import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import NewWorkspace from "./NewWorkspace";
import WorkspaceList from "./WorkspaceList";
import SidebarAccount from "./SidebarAccount";

// This is the custom styles for the sidebar. It will be used as a component down below
const StyledSideBar = styled.section`
  width: 280px;
  height: 100%;
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
    <StyledSideBar className="p-6">
      <SidebarAccount />
      <nav className="app-main-nav py-8">
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : ""}>
                Dashboard
              </a>
            </Link>
          </li>
        </ul>
        <div>
          <span>Workspaces</span>
          <button>+</button>
        </div>
        <WorkspaceList />
        <Link href="/projects">
          <a>All Projects</a>
        </Link>
      </nav>
      {/* <button onClick={() =>imapConnect()}>Sync Emails</button> */}
      <NewWorkspace />
    </StyledSideBar>
  );
};

export default Sidebar;
