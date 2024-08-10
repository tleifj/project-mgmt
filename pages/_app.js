import "../css/style.css";
// import "../css/form.css";
import Head from "next/head";
import Topbar from "../components/Topbar";
import Sidebar from "../components/SideBar";

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <html>
      <Head>
        <title>Project Manager</title>
      </Head>
      <div className="app-wrapper">
        <Sidebar></Sidebar>
        <main className="table wrapper">
          <Topbar></Topbar>
          <Component {...pageProps} />
        </main>
      </div>
    </html>
  );
}

export default MyApp;
