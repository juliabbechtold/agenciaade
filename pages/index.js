import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Cookies from '../components/Cookies/Cookies';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import api from '../services/api';
import ReactHtmlParser from 'react-html-parser';
import Question from '../components/Question';
import Image from 'next/image';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  Container,
  Blog,
  Essence,
  Cases,
  Projects,
  Works,
  Banner,
} from '../styles/home.js';
import { MdArrowRightAlt } from 'react-icons/md';

export async function getStaticProps() {
  // Fetch data from external API
  const res_cert = await api.get('/wp/v2/certificados?_fields=title,acf');
  const res_home = await api.get('/wp/v2/pages?slug=home&_fields=acf');
  const res_blog = await api.get('/wp/v2/posts?per_page=3');
  const res_cases = await api.get('/wp/v2/cases?per_page=6&_embed');
  const res_work = await api.get(
    '/wp/v2/trabalho?per_page=10&_fields=date,title,slug,acf'
  );

  // Pass data to the page via props
  return {
    props: {
      data: res_home.data[0].acf,
      certificates: res_cert.data,
      posts: res_blog.data,
      cases: res_cases.data,
      works: res_work.data,
    },
    revalidate: 5,
  };
}

export default function Home({ certificates, posts, data, cases, works }) {
  const [worksFiltered, setWorksFiltered] = useState();
  const [lastsWorks, setLastsWorks] = useState();
  const [projectWidth, setProjectWidth] = useState();
  const [projectWidthBar, setProjectWidthBar] = useState(0);

  useEffect(() => {
    let worksFilter = [];
    let lastsWorks = [];
    const project = document.getElementById('projects');

    for (var i = 3; i < 10; i++) {
      worksFilter[i] = works[i];
    }

    for (var i = 0; i < 3; i++) {
      lastsWorks[i] = works[i];
    }

    setWorksFiltered(worksFilter);
    setLastsWorks(lastsWorks);

    setProjectWidth(Number(project.offsetWidth * 100) / project.scrollWidth);

    const handleScroll = async () => {
      setProjectWidthBar(
        Number((project.scrollLeft * 100) / project.scrollWidth + projectWidth)
      );
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projectWidthBar]);

  console.log(data);

  return (
    <>
      <Cookies />
      <Head>
        <title>
          Agência Ade! Publicidade e Propaganda em Ponta Grossa - PR
        </title>
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
          content={process.env.PUBLIC_URL + '/screenshot.png'}
        />
      </Head>
      <Header />
      <Container>
        <Banner className="container">
          <div className="text">
            <p className="-bold">{data.banner.pergunta}</p>
            <div>
              <h1
                dangerouslySetInnerHTML={{
                  __html: `${data.banner.titulo}`,
                }}
              />
              <p>{data.banner.descricao}</p>
            </div>
          </div>
          <div className="button">
            <div className="arrow-btn">
              <div>
                <MdArrowRightAlt />
              </div>
              <p className="-spacing-6">
                ÚLTIMOS <strong>TRABALHOS</strong>
              </p>
            </div>
          </div>
        </Banner>
        <Works className="container">
          <div className="content">
            <div>
              <h2 className="-spacing-6 -bold">ÚLTIMOS TRABALHOS</h2>
              <a href="/portfolio" className="link-arrow -small -bold">
                Veja todos no <strong>Portfólio</strong>
                <div>
                  <div className="inner" />
                  <div className="inner2" />
                </div>
              </a>
            </div>
            {!!lastsWorks &&
              lastsWorks.map((work, index) => (
                <a key={index} href={`/portfolio/${work.slug}`}>
                  <p className="-small -spacing-6">
                    {work.acf.tipo.name}
                    <span>.</span>
                    <strong className="-bold">{work.title.rendered}</strong>
                  </p>
                  <div className="img">
                    <Image
                      src={work.acf.imagemzinha.sizes.medium}
                      layout="fill"
                    />
                  </div>
                  <div className="link-arrow -small -bold">
                    Conheça o projeto
                    <div>
                      <div className="inner" />
                      <div className="inner2" />
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </Works>
        <Projects>
          <div>
            <h2 className="-small -white -spacing-6 -bold">
              CONHEÇA OUTROS PROJETOS
            </h2>
            <div className="button">
              <div className="arrow-btn">
                Arraste
                <div>
                  <MdArrowRightAlt />
                </div>
              </div>
            </div>
            <div className="scroll">
              <div className="projects" id="projects">
                {!!worksFiltered &&
                  worksFiltered.map((work, index) => (
                    <a href={`/portfolio/${work.slug}`} key={index}>
                      <div className="img">
                        <Image
                          src={work.acf.imagemzinha.sizes.medium}
                          width={work.acf.imagemzinha.sizes['medium-width']}
                          height={work.acf.imagemzinha.sizes['medium-height']}
                        />
                      </div>
                      <div>
                        <p className="ano -white-2">
                          {format(new Date(work.date), 'yyyy', {
                            locale: ptBR,
                          })}
                        </p>
                        <p className="curtidas -white-2"></p>
                      </div>
                      <h3 className="-white">{work.title.rendered}</h3>
                      <p className="-white-2">{work.acf.tipo.name}</p>
                    </a>
                  ))}
                <a className="seeAll" href="/portifolio">
                  Veja o <br /> nosso portfolio <br /> completo
                </a>
              </div>
            </div>
            <div className="scrollBar">
              <span style={{ width: projectWidthBar * 4.3 }} />
            </div>
          </div>
        </Projects>
        <Question content={data.passo} />
        <Essence>
          <div className="container">
            <h2 className="-small -spacing-6 -bold -white">NOSSA ESSÊNCIA</h2>
            <div className="text">
              <p className="-white">{data.nossa_essencia}</p>
              <a
                href="/nossa-essencia"
                className="link-arrow -small -bold -white"
              >
                Conheça mais
                <div>
                  <div className="inner" />
                  <div className="inner2" />
                </div>
              </a>
            </div>
          </div>
        </Essence>
        <Blog className="container">
          <h2 className="-small -dark -bold -spacing-6">NOSSO BLOG</h2>
          <div>
            {posts.map((post, index) => {
              const date = format(new Date(post.date), 'dd MMM yyyy', {
                locale: ptBR,
              });

              const expand_date = date.split(' ');

              return (
                <a href={`/blog/${post.slug}`} key={index}>
                  <p className="-small -dark -spacing-6">
                    {expand_date[0]} <strong>{expand_date[1]}</strong>{' '}
                    {expand_date[2]}
                  </p>
                  <h3 className="-dark -bold">
                    {ReactHtmlParser(post.title.rendered)}
                  </h3>
                </a>
              );
            })}
          </div>
          <a href="/blog" className="link-arrow -dark -bold -small">
            Veja todos os posts{' '}
            <div>
              <div className="inner" />
              <div className="inner2" />
            </div>
          </a>
        </Blog>
        <Cases>
          <div className="bg" />
          <div className="container">
            <h2 className="-small -bold -spacing-6 -dark">CASES</h2>
            <div>
              {cases.map((data, index) => (
                <div key={index}>
                  <p className="-dark -small">
                    {ReactHtmlParser(data.content.rendered)}
                  </p>
                  <h3 className="-dark -small -spacing-6 -bold">
                    {data.title.rendered}
                  </h3>
                  <div>
                    <Image
                      src={data._embedded['wp:featuredmedia'][0].source_url}
                      width="130px"
                      height="130px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Cases>
      </Container>
      <Footer certificates={certificates} />
    </>
  );
}
