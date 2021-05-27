import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  min-height: 100vh;

  display: flex;

  #sidebar {
    width: 10vw;
    min-height: 100%;
    padding: 3rem;

    background: linear-gradient(
      180deg,
      ${(props) => props.theme.colors.background.light},
      transparent
    );
    backdrop-filter: blur(10px);

    display: flex;
    justify-content: center;
    align-items: space-around;

    z-index: 10;

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  main {
    width: 100%;

    .swiper-container {
      height: calc(100vh - 10vw);

      .swiper-slide {
        padding: 3rem;

        display: grid;
        grid-template-columns: 40% 60%;
        grid-template-rows: 100%;

        & * {
          z-index: 5;
        }

        h1 {
          position: absolute;

          font-size: 8rem;
          z-index: 0;
        }
        h2 {
          font-size: 2.4rem;
        }
        span {
          font-size: 1.4rem;
          color: ${(props) => props.theme.colors.red};
        }
        p {
          margin-top: 2rem;

          font-size: 1.2rem;
          line-height: 2rem;
        }

        .buttons {
          margin-top: 2rem;

          display: flex;
          gap: 4rem;
          align-items: center;

          button {
            /* height: 6rem; */
            padding: 1rem;

            /* font-size: 1.2rem; */

            background: ${(props) => props.theme.colors.primary.normal};
            border-radius: 10rem;
            border: none;
          }
          a {
            color: ${(props) => props.theme.colors.primary.dark};
          }
        }

        .mockup {
          position: absolute;
          width: 60vw;
          height: 100%;
          top: 0;
          right: 0;

          z-index: 0;
        }
      }
    }
  }

  @media (max-width: 720px) {
    main {
      .swiper-slide {
        grid-template-columns: 100%;
        grid-template-rows: auto auto;

        .mockup {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }
`;
