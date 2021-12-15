import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "./style";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar isOpen={openMenu}>
      <div>
        <a href="/">
          <h1>Portifólio</h1>
        </a>
        <nav>
          <ul>
            <li>
              <a href="/">Trabalhos</a>
            </li>
            {/* <li>
              <a href="/sobre" onClick={() => setOpenMenu(false)}>
                Sobre
              </a>
            </li>
            <li>
              <a href="/contato" onClick={() => setOpenMenu(false)}>
                Contato
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
      <div className="social">
        <a
          target="_blank"
          href="https://www.instagram.com/juliabbechtold/?hl=pt-br"
        >
          <AiOutlineInstagram />
        </a>
        <a target="_blank" href="https://www.facebook.com/julia.bechtold.10/">
          <AiOutlineFacebook />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/julia-borato-bechtold-249118160/"
        >
          <AiOutlineLinkedin />
        </a>
      </div>
      <button
        className={`hamburger hamburger--squeeze ${
          openMenu ? "is-active" : ""
        }`}
        type="button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </Navbar>
  );
}
