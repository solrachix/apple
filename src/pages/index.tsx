import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React, { ReactElement } from 'react'

import SEO from '@/components/SEO'
import Swiper, { SwiperSlide } from '@/components/Swiper'
import Mac from '@/components/Mac'
import Iphone from '@/components/Iphone'
import Header from '@/components/Header'
import { Container } from '@/styles/pages/Home'

interface HomeStaticProps {
  items: { title: string; description: string; deviceName: string }[]
}

type HomeProps = InferGetStaticPropsType<GetStaticProps<HomeStaticProps>>

const devices = [
  { name: 'Mac', Mockup: Mac },
  { name: 'Iphone', Mockup: Iphone }
]
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
          {items.map(item => {
            const device = devices.find(
              device => device.name === item.deviceName
            )

            return (
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
                {/* {devices.reduce((_, { name, Mockup }) => {
                return name === item.deviceName && <Mockup className="mockup" />
              })} */}

                <device.Mockup className="mockup" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  return {
    revalidate: 86400,
    props: {
      items: [
        {
          title: 'MacBook Pro',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad,
          voluptatibus delectus totam saepe incidunt velit sunt beatae
          enim dolorem? Vel facere odio animi reprehenderit tempora quo
          ipsa deserunt minus!`,
          deviceName: 'Mac'
        },
        {
          title: 'Iphone 12',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad,
          voluptatibus delectus totam saepe incidunt velit sunt beatae
          enim dolorem? Vel facere odio animi reprehenderit tempora quo
          ipsa deserunt minus!`,
          deviceName: 'Iphone'
        }
      ]
    }
  }
}
