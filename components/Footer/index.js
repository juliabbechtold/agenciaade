import React from "react";
import Image from "next/image";
import { Container, Content } from "./style";
import { FiHeart } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdPhoneIphone } from "react-icons/md";
export default function Footer() {
  return (
    <>
      <Content>
        <div className="first">
          <p className="text-footer">
            MAIS QUE IMÓVEIS. <b>NÓS</b>&nbsp;
            <span>CONSTRUÍMOS SONHOS.</span>
          </p>
        </div>
        <a className="second" href="/">
          <Image
            src="/assets/logo-colorida.png"
            alt="Img"
            objectFit="contain"
            width={200}
            height={150}
          />
        </a>
        <div className="third">
          <a
            className="box"
            href="https://goo.gl/maps/BBSFA9A3mX8DTKK49"
            target="_blank"
          >
            <GrLocation className="GrLocation" />
            <div className="content">
              <div className="title">
                <p className="title-footer">ENDEREÇO</p>
                <div className="line" />
              </div>
              <p className="subtitle-footer">
                Rua Marechal Cândido Rondon 176 Prudentópolis, PR
              </p>
            </div>
          </a>
          <div className="box">
            <MdPhoneIphone className="MdPhoneIphone" />
            <div className="content">
              <div className="title">
                <p className="title-footer">TELEFONE</p>
                <div className="line" />
              </div>
              <div className="tel-numbers">
                <a href="tel">
                  42 <span>9 9985.5685</span>
                </a>
                <a href="tel">
                  42 <span>9 9923.1234</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Container>
        <p>©2021 | APTO Construtora - Todos os Direitos Reservados</p>
        <a
          href="https://agenciaade.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito com <FiHeart /> por agenciaade.com.br
        </a>
      </Container>
    </>
  );
}
