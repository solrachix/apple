import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  min-height: 10vw;
  padding: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 4rem;
    align-items: center;

    a {
      font-family: Poppins, Nunito;
      font-size: 1.1rem;
      font-weight: 600;

      color: ${(props) => props.theme.colors.text.light};

      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
`;
