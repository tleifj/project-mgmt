import "../styles/globals.css";
// import "../css/form.css";
import Head from "next/head";
// import Topbar from "../components/Topbar";
import Sidebar from "../components/SideBar";
import Modal from "../components/WorkspaceModal";

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <html>
      <Head>
        <title>Project Manager</title>
      </Head>
      <div className="app-wrapper flex h-[100dvh] w-[100%]">
        <Sidebar></Sidebar>
        <main className="table wrapper py-6 px-10 grow">
          <Component {...pageProps} />
        </main>
      </div>
    </html>
  );
}

export default MyApp;
