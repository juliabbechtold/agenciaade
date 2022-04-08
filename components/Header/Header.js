import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from './style';
import { BsFillShareFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar isOpen={openMenu}>
      <div className="container navbar">
        <a href="/">
          <Image src="/assets/logo.svg" width="200" height="73.61" />
        </a>
        <nav>
          <ul>
            <li className="social">
              <p>
                <BsFillShareFill />
                Siga a gente
              </p>
              <div className="social-networks">
                <p>Siga:</p>
                <a
                  title="Instagram"
                  href="https://www.instagram.com/agenciaade/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  In
                </a>
                <a
                  title="Facebook"
                  href="https://www.facebook.com/agenciaade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fb
                </a>
                <a
                  title="Twitter"
                  href="https://twitter.com/agenciaade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tw
                </a>
                <a
                  title="Linkedin"
                  href="https://br.linkedin.com/company/agenciaade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Li
                </a>
              </div>
            </li>
            <li className="menu">
              <button type="button" onClick={() => setOpenMenu(!openMenu)}>
                <p>{openMenu ? 'Voltar' : 'Menu'}</p>
                <span className="menu-box">
                  <span className="menu-inner"></span>
                  <span className="menu-inner2"></span>
                  <span className="menu-inner3"></span>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="menu-nav">
        <div className="container">
          <div className="menu-infos">
            <div className="logo">
              <Image
                src="/assets/img/logo-preta.svg"
                width="303.38px"
                height="135.57px"
              />
            </div>

            <div className="telefone">
              <p>Toque e ligue</p>
              <a href="tel: +554230287790">
                <span>42</span> 3028.7790
              </a>
            </div>
            <div className="whatsapp">
              <a
                href="https://api.whatsapp.com/send?phone=5542988016033"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chama no zap <BsWhatsapp />
              </a>
            </div>
            <a
              className="endereco"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              End.: R. Santos Dumont, 1487 Ponta Grossa - PR
              <span>Ver no mapa</span>
            </a>
            <a
              className="email"
              href="mailto: contato@agenciaade.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>contato@</span>agenciaade.com.br
            </a>
          </div>
          <nav className="menu-items">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/sobre-nos">Nós</a>
              </li>
              <li>
                <a href="/servicos">Serviços</a>
              </li>
              <li>
                <a href="/portifolio">Portifólio</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/trabalhe-conosco">Trabalhe aqui!</a>
              </li>
              <li>
                <a onClick={() => setOpenMenu(false)} href="#contato">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Navbar>
  );
}
