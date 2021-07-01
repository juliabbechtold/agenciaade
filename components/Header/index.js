import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar, Container } from "./style";
import { Spin as Hamburger } from "hamburger-react";

//import icons
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [stateScroll, setStateScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);

  function fechaMenu() {
    setOpen(!isOpen);
  }

  return (
    <Container>
      <div className="MenuWeb">
        <a href="/" className="logo">
          <Image
            src="/assets/logo.svg"
            alt="Img"
            objectFit="contain"
            width={160}
            height={90}
          />
        </a>
        <nav>
          <ul>
            <li>
              <a href="/quem-somos" onClick={() => setOpenMenu(false)}>
                Quem somos
              </a>
            </li>
            <li>
              <a href="/empreendimentos" onClick={() => setOpenMenu(false)}>
                Empreendimentos
              </a>
            </li>
            <li>
              <a href="/blog" onClick={() => setOpenMenu(false)}>
                Blog
              </a>
            </li>
            <li>
              <a href="/#contato" onClick={() => setOpenMenu(false)}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <a href="" className="whats-icon">
          <AiOutlineWhatsApp className="AiOutlineWhatsApp" />
        </a>
      </div>
      <div className="MenuMobile">
        <div className="logo">
          <a href="/" className="Logo">
            <Image src="/assets/logo.svg" alt="Img" width={150} height={100} />
          </a>
          <Hamburger
            className="hamburger-react"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        <div className={`Open${isOpen ? "mobile" : ""}`}>
          <nav>
            <ul>
              <li>
                <a href="/quem-somos" onClick={() => setOpenMenu(false)}>
                  Quem somos
                </a>
              </li>
              <li>
                <a href="/empreendimentos" onClick={() => setOpenMenu(false)}>
                  Empreendimentos
                </a>
              </li>
              <li>
                <a href="/blog" onClick={() => setOpenMenu(false)}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/#contato" onClick={() => setOpenMenu(false)}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
}
