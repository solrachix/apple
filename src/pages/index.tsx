import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { ReactElement } from "react";

import SEO from "@/components/SEO";
import Swiper, { SwiperSlide } from "@/components/Swiper";
import Mac from "@/components/Mac";
import Header from "@/components/Header";
import { Container } from "@/styles/pages/Home";

interface HomeStaticProps {
  items: { title: string; description: string }[];
}

type HomeProps = InferGetStaticPropsType<GetStaticProps<HomeStaticProps>>;

export default function Home({ items }: HomeProps): ReactElement {
  return (
    <Container>
      <nav id="sidebar">
        <img src="/images/icons/logo.svg" alt="Logo" />
      </nav>

      <main>
        <Header />

        <Swiper
          direction="vertical"
          spaceBetween={50}
          slidesPerView="auto"
          pagination={{
            clickable: true
          }}
          scrollbar={{ draggable: true }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="titleBox">
                <span>Novo</span>
                <h1>{item.title}</h1>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="buttons">
                  <button>Comprar agora</button>
                  <a href="/#">Ler mais</a>
                </div>
              </div>
              <Mac className="mockup" />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  return {
    revalidate: 86400,
    props: {
      items: [
        {
          title: "MacBook Pro",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad,
          voluptatibus delectus totam saepe incidunt velit sunt beatae
          enim dolorem? Vel facere odio animi reprehenderit tempora quo
          ipsa deserunt minus!`
        },
        {
          title: "Aiphone 12",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad,
          voluptatibus delectus totam saepe incidunt velit sunt beatae
          enim dolorem? Vel facere odio animi reprehenderit tempora quo
          ipsa deserunt minus!`
        }
      ]
    }
  };
};