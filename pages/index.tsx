import Head from "next/head";
import { useEffect } from "react";
import styled from "@emotion/styled";

export default function Home() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainDiv />
        <SubDiv />
      </main>

      <footer>FOOTER</footer>
    </div>
  );
}

const MainDiv = styled.div`
  height: 100vh;
  background: blue;
`;

const SubDiv = styled.div`
  height: 100vh;
  background: green;
`;
