import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { ReactElement } from "react";

import SEO from "@/components/SEO";
import Mac from "@/components/Mac";
import Header from "@/components/Header";
import { Container } from "@/styles/pages/Home";

// interface HomeStaticProps {
//   ogImage: string
// }

// type HomeProps = InferGetStaticPropsType<GetStaticProps<HomeStaticProps>>

export default function Home(): ReactElement {
  return (
    <Container>
      <nav id="sidebar">
        <img src="/images/icons/logo.svg" />
      </nav>

      <main>
        <Header />
      </main>
      <Mac />
    </Container>
  );
}

// export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
//   return {
//     revalidate: 86400,
//     props: {}
//   }
// }
