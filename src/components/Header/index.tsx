import Link from "next/link";

import { IoIosCart, IoIosSearch } from "react-icons/io";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <div>
        <Link href="#">
          <a>Home</a>
        </Link>
        <Link href="#">
          <a>Sobre</a>
        </Link>
        <Link href="#">
          <a>Compre Agora</a>
        </Link>
      </div>

      <div>
        <Link href="#">
          <a>
            <IoIosSearch />
          </a>
        </Link>
        <Link href="#">
          <a>
            <IoIosCart />
          </a>
        </Link>
      </div>
    </Container>
  );
}
