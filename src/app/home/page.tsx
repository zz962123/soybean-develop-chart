import Head from "next/head";
// import { Head } from "next/document";

export default function HomePage() {
  return (
    <div>    
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      HOME
    </div>
  );
}
