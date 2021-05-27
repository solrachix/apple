import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { ReactElement } from "react";

import SEO from "@/components/SEO";
import Swiper, { SwiperSlide } from "@/components/Swiper";
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

        <Swiper direction="vertical" spaceBetween={50} slidesPerView="auto">
          <SwiperSlide>
            <div className="titleBox">
              <span>Novo</span>
              {/* <h1>MacBook Pro</h1> */}
              <h2>MacBook Pro</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad,
                voluptatibus delectus totam saepe incidunt velit sunt beatae
                enim dolorem? Vel facere odio animi reprehenderit tempora quo
                ipsa deserunt minus!
              </p>
              <div className="buttons">
                <button>Comprar agora</button>
                <a href="/#">Ler mais</a>
              </div>
            </div>
            <Mac className="mockup" />
          </SwiperSlide>

          <SwiperSlide>
            <div className="titleBox">
              <span>Novo</span>
              {/* <h1>MacBook Pro</h1> */}
              <h2>MacBook Pro</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad,
                voluptatibus delectus totam saepe incidunt velit sunt beatae
                enim dolorem? Vel facere odio animi reprehenderit tempora quo
                ipsa deserunt minus!
              </p>
              <div className="buttons">
                <button>Comprar agora</button>
                <a href="/#">Ler mais</a>
              </div>
            </div>
            <Mac className="mockup" />
          </SwiperSlide>
        </Swiper>
      </main>
    </Container>
  );
}

// export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
//   return {
//     revalidate: 86400,
//     props: {}
//   }
// }
