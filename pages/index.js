import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contato from "../components/Contato";
import { Container, Blog } from "../styles/home.js";
import Image from "next/image";

import api from "../services/api";
// export async function getStaticProps() {

//   const cpf = await api.get("pages?slug=e-cpf");

//   return {
//     props: {
//       dataCpf: cpf.data[0],
//       dataContato: contato.data[0],
//       dataHome: home.data[0],
//     },
//     revalidate: 5,
//   };
// }

function BlogContainer(props) {
  return (
    <>
      <Blog>
        <div className="header-blog">
          <h2>Blog</h2>
          <h1>PRINCIPAIS NOTÍCIAS</h1>
          <div className="line" />
        </div>
        <div className="cards">
          <a className="card">
            <div className="bg" href="/">
              <Image
                src="/assets/banner-blog.jpg"
                alt="banner blog"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="content-card">
              <p className="title-card">
                {" "}
                SAIBA MAIS SOBRE A DECORAÇÃO ESTILO MODERNO
              </p>
              <p className="subtitle-card">
                {" "}
                Conheça o novo estilo de decoração que está em alta para 2022.
              </p>
              <p className="btn-card">Saiba mais</p>
            </div>
          </a>
          <a className="card">
            <div className="bg" href="/">
              <Image
                src="/assets/banner-blog.jpg"
                alt="banner blog"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="content-card">
              <p className="title-card">
                {" "}
                SAIBA MAIS SOBRE A DECORAÇÃO ESTILO MODERNO
              </p>
              <p className="subtitle-card">
                {" "}
                Conheça o novo estilo de decoração que está em alta para 2022.
              </p>
              <p className="btn-card">Saiba mais</p>
            </div>
          </a>
        </div>
        <a className="btn-page-blog">Leia mais</a>
      </Blog>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>APTO - Mais que imóveis, contruímos sonhos.</title>
        <meta
          name="description"
          content="Agência de Publicidade e Propaganda em Ponta Grossa - PR. Criação de marca, campanha, site, impresso, facebook, identidade visual, logo"
        />
        <meta
          name="keywords"
          content="marca, campanha, site, impresso, facebook, identidade visual, logo"
        />
        <meta
          property="og:image"
          content={process.env.PUBLIC_URL + "/screenshot.png"}
        />
      </Head>
      <Header />
      <Container></Container>
      <BlogContainer />
      <Contato />
      <Footer />
    </>
  );
}
